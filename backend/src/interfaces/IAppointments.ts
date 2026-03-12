import { AppointmentStatus } from "../enums/AppointmentStatus";

export interface IAppointment {
    id: string,
    userId: string,
    date: Date,
    time: string,
    service: string,
    status: AppointmentStatus
}