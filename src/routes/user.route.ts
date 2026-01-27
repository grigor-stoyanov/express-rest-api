import { Router } from "express";
import { asyncHandler } from "../utils/utils";
import { UserService } from "../db/services/user.service";

export const userRouter = Router();

userRouter.post(
  "/users",
 asyncHandler(async (req, res) => {
    const result = await UserService.createUser(req.body);
    res.status(201).json({ result });
  })
);

userRouter.post(
  '/users/login',
  asyncHandler(async (req,res)=>{
    res.status(200).json(await UserService.loginUser(req.body))
  })
)