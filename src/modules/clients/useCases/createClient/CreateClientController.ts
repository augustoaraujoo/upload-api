import { Response, Request } from 'express';
import { createClientUseCase } from '.';

class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { username } = req.body;


        const createClient = await createClientUseCase.execute({
            username
        })
        return res.json(createClient).status(201);

    }
}

export { CreateClientController };