
export interface UserInterface {
    id:string;
    created:Date;
    lastUpdated:Date;
    email:string;
    pictureUrl:string;
    passwordSalt:string;
    passwordHash:string;
    isAdmin:boolean;
}