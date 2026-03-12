import { AppointmentStatus } from "../enums/AppointmentStatus";
import { IAppointment } from "../interfaces/IAppointments";
import { appointmentRepository } from "../repositories/appointmentRepository";
import { doctorRepository } from "../repositories/doctorRepository";
import { userRepository } from "../repositories/userRepository";

export const appointmentsPostService = async(
  appointmentData: IAppointment,
  userId: string,
  doctorId: string
) => {

  const user = await userRepository.findOneBy({ id: userId });
  const doctor = await doctorRepository.findOneBy({ id: doctorId });

  if (!user) {
    throw Error("No se encontro el usuario");
  }

  if (!doctor) {
    throw Error("No se encontro el doctor");
  }

  const existingAppointment = await appointmentRepository.findOne({
    where: {
      doctorId: doctorId,
      date: appointmentData.date,
      time: appointmentData.time
    }
  });

  if (existingAppointment) {
    throw Error("El doctor ya tiene un turno en ese horario");
  }

  const newAppointment = appointmentRepository.create({
    date: appointmentData.date,
    time: appointmentData.time,
    userId,
    doctorId
  });

  await appointmentRepository.save(newAppointment);

  return newAppointment;
};

export const appointmentsGetService = async () => {
  return await appointmentRepository.find({
    relations: {
      user: true,
      doctor: true
    },
    select: {
      id: true,
      date: true,
      time: true,
      status: true,
      user: {
        id: true,
        name: true,
        lastName: true,
        email: true,
        zipCode: true,
        nationality: true,
        phone: true
      },
      doctor: {
        id: true,
        specialty: true,
      }
    }
  });
};

export const appointmentsGetUserService = async (userId: string) => {

  const userFinded = await userRepository.findOneBy({ id: userId });

  if (!userFinded) throw Error("No se encontro un usuario");

  const appointments = await appointmentRepository.find({
    where: {
      user: { id: userId }
    }
  });

  return appointments;
};

export const appointmentsPutService = async(appointmentId: string, updatedData: IAppointment) => {  
  const appointment = await appointmentRepository.findOneBy({ id: appointmentId });

  if (!appointment){
    throw Error("No se encontro una cita");
  }

  const appointmendUpdated = appointmentRepository.merge(appointment, updatedData);

  appointmentRepository.save(appointmendUpdated);

  return appointmendUpdated
}

export const appointmentsPatchService = async(
  appointmentId: string,
  userId: string,
  status: AppointmentStatus
) => {

  const userFinded = await userRepository.findOneBy({ id: userId });
  if (!userFinded) throw Error("Usuario no encontrado");

  const appointmentFinded = await appointmentRepository.findOneBy({ id: appointmentId });
  if (!appointmentFinded) throw Error("Turno no encontrado");

  appointmentFinded.status = status;

  const appointmentUpdated = await appointmentRepository.save(appointmentFinded);

  return appointmentUpdated;
};