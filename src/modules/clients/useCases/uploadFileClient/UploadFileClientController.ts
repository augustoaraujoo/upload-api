import { Response, Request } from 'express';
import { UploadFileClientUseCase } from './uploadFileClientUseCase';
import { PrismaRepositoryClient } from '../../repositories/prismaRepository/PrismaRepositoryClient';
interface File {
    path: string
    filename?: string
}
class UploadFileClientController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { path, filename } = req.file as File;
        // remover dps username no body
        const { id } = req.params

        const prismaRepositoryClient = new PrismaRepositoryClient();
        const uploadFileClientUseCase = new UploadFileClientUseCase(prismaRepositoryClient);
        const createUpload = await uploadFileClientUseCase.execute({
            id,
            path,
            filename
        })

        return res.json(createUpload).status(201);

    }
}

export { UploadFileClientController };