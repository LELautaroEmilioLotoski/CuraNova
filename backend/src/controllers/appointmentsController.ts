
import { Request, Response } from "express";
import { appointmentsGetService, appointmentsGetUserService, appointmentsPatchService, appointmentsPostService, appointmentsPutService } from "../services/appointmentsService";

export const appointmentsPostController = async(req: Request, res: Response) => {
    const appointmentData = req.body;
    const { userId, doctorId } = req.params;
    try {
        const response = await appointmentsPostService(appointmentData, String(userId), String(doctorId));

        if (!response) {
            res.status(400).send("Error al crear la cita");
        }
        
        res.status(201).json({ message: "Cita creada exitosamente", appointment: response });
    } catch (error) {
        console.error(error);
        throw Error("Error del servidor");
    }
}

export const appointmentsGetController = async(req: Request, res: Response) => {
    try {
        const response = await appointmentsGetService();

        if (!response) {
            res.status(400).send("Error al obtener las citas");
        }

        res.status(200).json({ appointments: response });
    } catch (error) {
        console.error(error);
        throw Error("Error del servidor");
    }
}

export const appointmentsGetUserController = async(req: Request, res: Response) => {

    const userId = req.params.userId as string;

    try {
        const response = await appointmentsGetUserService(userId);

        if (!response) {
            res.status(400).send("Error al obtener las citas");
        }

        res.status(200).json({ appointments: response });
    } catch (error) {
        console.error(error);
        throw Error("Error del servidor");
    }
}


export const appointmentsPutController = async (req: Request, res: Response) => {

    const appointmentId = req.params.appointmentId as string;
    const updatedData = req.body;

    try {

        const response = await appointmentsPutService(appointmentId, updatedData);

        if (!response) {
            return res.status(400).send("Error al actualizar las citas");
        }

        res.status(200).json({
            message: "Turno actualizado con éxito!",
            response
        });

    } catch (error) {
        console.error(error);
        res.status(500).send("Error del servidor");
    }
};

export const appointmentsPatchController = async(req: Request, res: Response) => {
    
    const appointmentId = req.params.appointmentId as string;
    const userId = req.params.userId as string;
    const { status } = req.body;

    try {
        const response = await appointmentsPatchService(appointmentId, userId, status);

        if (!response) {
            res.status(400).json("No se pudo cambiar el estado")
        }

        res.status(200).json({ message: "Estado actualizado con éxito!", response });
    }  catch (error) {
        console.error(error);
        res.status(500).send("Error del servidor");
    }
}