import { Request, Response } from "express";
import {
  userGetByIdService,
  userGetService,
  userPutService,
} from "../services/userService";

export const userGetController = async (req: Request, res: Response) => {
  try {
    const users = await userGetService();

    res.status(200).json(users);
  } catch (error) {
    console.error("User get error:", error);
    res.status(500).send("Ocurrió un error al obtener los usuarios");
  }
};

export const userGetUserByIdController = async (
  req: Request,
  res: Response,
) => {
  const { userId } = req.params;

  try {
    const user = await userGetByIdService(userId as string);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({
      message: "Usuario encontrado",
      user,
    });
  } catch (error) {
    console.error("User get error:", error);
    res.status(500).send("Ocurrió un error al obtener el usuario");
  }
};

export const userPutController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const userData = req.body;

  try {
    const user = await userPutService(userId as string, userData);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({
      message: "Usuario actualizado con éxito!",
      user
    });

  } catch (error) {
    console.error("User update error:", error);
    res.status(500).send("Ocurrió un error al actualizar el usuario");
  }
};

