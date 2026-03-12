import { AppDataSource } from "../config/data-source";
import { Doctor } from "../entities/Doctor";

export const doctorRepository = AppDataSource.getRepository(Doctor);    