import { IDoctor } from "../interfaces/IDoctor";
import { ICredentials, IUser } from "../interfaces/IUser";
import { doctorRepository } from "../repositories/doctorRepository";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authPosRegistertService = async (userData: IUser) => {
  const newUser = userRepository.create(userData);

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const finalUser = { ...newUser, password: hashedPassword };

  await userRepository.save(finalUser);

  return finalUser;
};

export const authPostLoginService = async (email: string, password: string) => {
  const user = await userRepository.findOne({
    where: { email },
  });

  if (!user) {
    throw new Error("usuario no encontrado");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" },
  );
  return {
    message: "Login successful",
    token,
  };
};

export const authPostDoctorService = async (doctorData: IDoctor) => {
    const user = await userRepository.findOneBy({ id: doctorData.userId });
    
    if (!user) {
        throw new Error("Usuario no encontrado para asociar al doctor");
    }

    const newDoctor = doctorRepository.create(doctorData);
    
    if (!newDoctor) {
        throw new Error("Error al crear el doctor");
    }

    const doctorSaved = await doctorRepository.save(newDoctor);

    return doctorSaved;
}