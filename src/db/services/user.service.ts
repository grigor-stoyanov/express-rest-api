import createHttpError from "http-errors";
import { UserDTO } from "../../interfaces";
import { SealClass } from "../../utils/decorators";
import { AppDataSource } from "../datasource";
import { User } from "../models/users.entity";
import { calculatePasswordHash, mapToEntity } from "../../utils/utils";
import { logger } from "../../utils/logger";
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

@SealClass()
export class UserService {
  public static async createUser(body: UserDTO) {
    const {email,password} = body;
    if(!email){
        throw createHttpError(400, "Could not extract email from body")
    }
    if(!password){
        throw createHttpError(400, "Could not extract password from body")
    }
    const respository =  AppDataSource.getRepository(User);
    const user = await respository.findOne({where:{email}});
    if(user){
        const message = `User with ${email} exists. aborting...`
        throw createHttpError(500,message);
    }
    const passwordSalt = crypto.randomBytes(64).toString('hex');
    const passwordHash = await calculatePasswordHash(password,passwordSalt);
    const newUser = respository.create({...mapToEntity(User,body),passwordHash,passwordSalt});
    await AppDataSource.manager.save(newUser);
    return {message:"New user created",email,"pictuureURL":body.pictureUrl,"isAdmin":body.isAdmin};
  }

  public static async loginUser(body:Partial<UserDTO>){
    const {email,password} = body;
     if(!email){
        throw createHttpError(400, "Could not extract email from body")
    }
    if(!password){
        throw createHttpError(400, "Could not extract password from body")
    }
    const user =  await AppDataSource.getRepository(User)
      .createQueryBuilder("users")
      .where("email = :email",{email})
      .getOne()
    if(!user){
      logger.info(`Login Denied for - ${email}`)
      throw createHttpError(403,"Login Denied");
    }
    const passwordHash = await calculatePasswordHash(password,user.passwordSalt);
    if(passwordHash != user.passwordHash){
      logger.info(`wrong password for - ${email}`);
      throw createHttpError(403,"wrong password");
    }
    logger.info(`User ${email} has now logged in`);

    const {pictureUrl,isAdmin} = user;

    const authJwt = {
      userId: user.id,
      email,
      isAdmin
    }

    const authJwtToken = await jwt.sign(authJwt,JWT_SECRET);

    return{user:{
        email,
        pictureUrl,
        isAdmin
      },token:authJwtToken}
  }
}
