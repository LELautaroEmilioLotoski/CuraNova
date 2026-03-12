import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Appointment } from "./Appointments";

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  specialty!: string;

  @Column()
  licenseNumber!: string;

  @Column()
  experienceYears!: number;

  @Column()
  pricePerConsultation!: number;

  @Column("simple-array")
  obraSocial!: string[];

  @Column()
  biography!: string;

  @OneToOne(() => User, (user: User) => user.doctor)
  @JoinColumn({ name: "userId" })
  user!: User;

  @Column()
  userId!: string;

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments!: Appointment[];
}
