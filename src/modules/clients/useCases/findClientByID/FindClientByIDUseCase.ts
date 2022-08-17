import { PrismaRepositoryClient } from '../../../../modules/clients/repositories/prismaRepository/PrismaRepositoryClient';
interface IRequest {
    id: string;
}

class FindClientByIDUseCase {
    constructor(private prismaRepositoryClient: PrismaRepositoryClient) { }

    async execute({ id }: IRequest): Promise<any> {
        const findClient = await this.prismaRepositoryClient.findClientById(id);
        if (!findClient) {
            throw new Error('Client not found');
        }
        return findClient;
    }
}

export { FindClientByIDUseCase };