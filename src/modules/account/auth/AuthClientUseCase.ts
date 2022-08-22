import { sign } from "jsonwebtoken";
import { PrismaRepositoryClient } from "../../clients/repositories/prismaRepository/PrismaRepositoryClient";

interface IRequest {
    username: string
}

class AuthClientUseCase {

    async execute({ username }: IRequest): Promise<any> {
        const prisma = new PrismaRepositoryClient();
        const client = await prisma.findClient({username});
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