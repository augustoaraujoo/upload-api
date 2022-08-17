import { PrismaRepositoryClient } from "../../../../modules/clients/repositories/prismaRepository/PrismaRepositoryClient";

interface IRequest {
    id: string;
    path: string
    filename?: string
}

class UploadFileClientUseCase {
    constructor(private prismaRepositoryClient: PrismaRepositoryClient) { }

    async execute({ id, path, filename }: IRequest): Promise<any> {
        
        const findClientById = await this.prismaRepositoryClient.findClientById(id);
        if (!findClientById) {
            throw new Error("ClientID not found");
        }
        const createPhoto = await this.prismaRepositoryClient.createPhoto({ id, path, filename });
        return createPhoto;
    }
}

export { UploadFileClientUseCase };