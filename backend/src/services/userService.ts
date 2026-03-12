import { IUser } from "../interfaces/IUser";
import { userRepository } from "../repositories/userRepository"

export const userGetService = async () => {
    return await userRepository.find();
};

export const userGetByIdService = async(userId: string) => {
   return await userRepository.findOneBy({ id: userId });
}

export const userPutService = async (userId: string, userData: IUser) => {
    const user = await userGetByIdService(userId);

    if (!user) throw new Error("Usuario no encontrado");

    Object.assign(user, userData);

    return await userRepository.save(user);
};