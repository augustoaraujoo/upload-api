import { Response, Request } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';
import { PrismaRepositoryClient } from '../../repositories/prismaRepository/PrismaRepositoryClient';

class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { username } = req.body;
        const prismaRepositoryClient = new PrismaRepositoryClient();
        const createClientUseCase = new CreateClientUseCase(prismaRepositoryClient);

        const createClient = await createClientUseCase.execute({
            username
        })
        return res.json(createClient).status(201);

    }
}

export { CreateClientController };