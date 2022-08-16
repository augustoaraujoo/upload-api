import { PrismaRepositoryClient } from "../../repositories/prismaRepository/PrismaRepositoryClient";
interface IRequest {
    username: string;
}
class CreateClientUseCase {
    constructor(private prismaRepositoryClient: PrismaRepositoryClient) { }
    async execute({ username }: IRequest): Promise<any> {
        // func find client
        const findClient = await this.prismaRepositoryClient.findClient({ username });
        if (findClient) {
            throw new Error("Client already exists");
        }
        const createClient = await this.prismaRepositoryClient.create({
            username
        })
        return createClient;
    }
}

export { CreateClientUseCase };