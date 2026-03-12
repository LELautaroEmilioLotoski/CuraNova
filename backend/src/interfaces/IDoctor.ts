import { IUser } from "./IUser";


export interface IDoctor extends IUser {
    specialty: string;
    licenseNumber: string;
    experienceYears: number;
    pricePerConsultation: number;
    obraSocial: string[];
    biography: string;
    userId: string;
}