
import { Request, Response } from "express";
import { authPosRegistertService, authPostDoctorService, authPostLoginService } from "../services/authService";

export const authPostRegisterController = async(req: Request, res: Response) => {
    const userData = req.body;

    if (!userData){
        return res.status(400).send("Los datos del usuario son requeridos");
    }
    try {
        const response = await authPosRegistertService(userData);
        
        if (!response) {
            res.status(400).send("Error al registrar el usuario");
        }

        res.status(201).json(response);
    } catch (error) {
        res.status(500).send("Error occurred while registering");
    }
};

export const authPostLoginController = async(req: Request, res: Response) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email y contraseña son requeridos");
    }

    try {
        const response = await authPostLoginService(email, password);
        
        if(!response) {
            res.status(400).send("usuario o contraseña incorrectos");
        }

        res.status(200).json({ message: "inicio de sesion exitoso", token: response.token });
    } catch (error) {
        res.status(500).send("Ocurrió un error al iniciar sesión");
        console.error("Login error:", error);
    }
}

export const authPostDoctorController = async(req: Request, res: Response) => {

    const doctorData = req.body

    try {
        const response = await authPostDoctorService(doctorData);

        if (!response) {
            res.status(400).send("Error al crear el doctor");
        }

        res.status(201).json({ message: "Doctor creado exitosamente", doctor: response });
    } catch (error) {
        res.status(500).send("Ocurrió un error al crear el doctor");
        console.error("Doctor creation error:", error);
    }
}