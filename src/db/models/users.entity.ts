import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserInterface } from "../../interfaces";


@Entity({
    name:"USERS"
})
export class User implements UserInterface {
    @PrimaryGeneratedColumn()
    id!:string;

    @CreateDateColumn()
    created!:Date;

    @UpdateDateColumn()
    lastUpdated!:Date;

    @Column()
    email!:string;

    @Column()
    pictureUrl!:string;

    @Column()
    passwordSalt!:string;

    @Column()
    passwordHash!:string;

    @Column()
    isAdmin!:boolean;
}