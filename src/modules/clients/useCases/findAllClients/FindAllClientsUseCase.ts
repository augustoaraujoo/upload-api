import { PrismaRepositoryClient } from '../../repositories/prismaRepository/PrismaRepositoryClient';

class FindAllClientsUseCase {
    constructor(private prismaRepositoryClient: PrismaRepositoryClient) { }

    async execute(): Promise<any> {

        const clients = await this.prismaRepositoryClient.findAllClients();
        return clients;
    }
}

export { FindAllClientsUseCase };