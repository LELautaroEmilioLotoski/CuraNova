import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointments";

export const appointmentRepository = AppDataSource.getRepository(Appointment);    