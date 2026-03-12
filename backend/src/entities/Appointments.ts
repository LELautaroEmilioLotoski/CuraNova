import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { User } from "./User";
import { Doctor } from "./Doctor";
import { AppointmentStatus } from "../enums/AppointmentStatus";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "date" })
  date!: Date;

  @Column()
  time!: string;

  @Column({
    type: "enum",
    enum: AppointmentStatus,
    default: AppointmentStatus.SCHEDULED,
  })
  status!: AppointmentStatus;

  @Column({ nullable: true })
  notes!: string;

  @Column({ nullable: true })
  cancelReason!: string;

  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "userId" })
  user!: User;

  @Column()
  userId!: string;

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  @JoinColumn({ name: "doctorId" })
  doctor!: Doctor;

  @Column()
  doctorId!: string;
}