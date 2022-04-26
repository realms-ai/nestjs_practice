import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty } from "class-validator";
import { Report } from "../reports/report.entity";
import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ default: false })
    admin: boolean;

    @Column({ unique: true })
    @IsEmail({}, { message: 'Incorrect email format' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @Column()
    @Exclude()
    @IsNotEmpty({ message: 'Password is required' })
    password: string;

    @OneToMany(() => Report, report => report.owner)
    reports: Report[]

    @OneToMany(() => Report, report => report.approver)
    approvedReports: Report[]

    @AfterInsert()
    logInsert() {
        console.log ("Created a new user with id:", this.id)
    }

    @AfterUpdate()
    logUpdate() {
        console.log ("Updated a user with id: ", this.id)
    }

    @AfterRemove()
    logRemove() {
        console.log ("Removed the user with id: ", this.id)
    }
}