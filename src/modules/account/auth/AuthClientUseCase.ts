import { prismaDBClient } from "../../../db/prismaDBClient";
import { sign } from "jsonwebtoken";

interface IRequest {
    username: string
}

class AuthClientUseCase {

    async execute({ username }: IRequest): Promise<any> {
        const client = await prismaDBClient.user.findFirst({
            where: {
                username
            }
        });
        if (!client) {
            throw new Error('Client not found');
        }
        const token = sign({ username }, `${process.env.JWT_KEY_USER}`, {
            subject: client.id,
            expiresIn: '1d'
        })
        console.log(token);

        return token;
    }
}

export { AuthClientUseCase };