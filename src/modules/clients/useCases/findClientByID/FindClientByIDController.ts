import { Response, Request } from 'express';
import { findClientByIDUseCase } from '.';

class FindClientByIDController {
    async handle(req: Request, res: Response) {

        const { id } = req.params;
        const find = await findClientByIDUseCase.execute({ id });
        return res.json(find).status(200);

    }
}

export { FindClientByIDController };