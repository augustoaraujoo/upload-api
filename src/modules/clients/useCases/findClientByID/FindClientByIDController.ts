import { Response, Request } from 'express';
import { findClientByIDUseCase } from './index';


class FindClientByIDController {
    async handle(req: Request, res: Response) {

        const { id } = req;
        const find = await findClientByIDUseCase.execute({ id });
        return res.json(find).status(200);

    }
}

export { FindClientByIDController };