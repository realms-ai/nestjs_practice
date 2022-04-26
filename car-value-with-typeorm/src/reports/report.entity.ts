import { User } from "../users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: false })
    approved: boolean;

    @Column()
    price: number;

    @Column()
    make: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    mileage: number;

    @ManyToOne(() => User, owner => owner.reports, { lazy: true })
    @JoinColumn({ name: 'user_id' })
    owner: Promise<User>

    @Column({name: 'user_id'})
    userId: number

    @ManyToOne(() => User, approver => approver.reports, { lazy: true, nullable: true })
    @JoinColumn({ name: 'approver_id' })
    approver: Promise<User>

    @Column({name: 'approver_id', nullable: true})
    approverId: number
}