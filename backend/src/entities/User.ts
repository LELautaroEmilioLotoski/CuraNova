import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from "typeorm";
import { UserRole } from "../enums/UserRole";
import { Doctor } from "./Doctor";
import { Appointment } from "./Appointments";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: "date" })
  birthday!: Date;

  @Column()
  phone!: string;

  @Column({ unique: true })
  dni!: string;

  @Column()
  address!: string;

  @Column()
  zipCode!: string;

  @Column()
  nationality!: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.PATIENT,
  })
  role!: UserRole;

  @OneToOne(() => Doctor, (doctor: Doctor) => doctor.user)
  doctor!: Doctor;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments!: Appointment[];
}
