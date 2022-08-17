import { Response, Request } from 'express';
import { authClientUseCase } from './index';

class AuthClientController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { username } = req.body;
        const client = await authClientUseCase.execute({ username });
        return res.json(client).status(200);

    }
}

export { AuthClientController };