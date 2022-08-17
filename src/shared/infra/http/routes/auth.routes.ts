import { Router } from "express";
import { AuthClientController } from "../../../../modules/account/auth/AuthClientController";


const authRouter = Router();
const authClientController = new AuthClientController();
authRouter.post('/auth', authClientController.handle);
export { authRouter }