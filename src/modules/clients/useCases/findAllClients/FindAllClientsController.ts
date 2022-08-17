import { Response, Request } from 'express';
import { findAllClientsUseCase } from './index';

class FindAllClientsController {
    async handle(req: Request, res: Response): Promise<Response> {

        const findAllClients = await findAllClientsUseCase.execute();
        return res.json(findAllClients).status(200);

    }
}

export { FindAllClientsController };