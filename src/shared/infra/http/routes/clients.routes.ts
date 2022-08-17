import { Router } from 'express';
import { CreateClientController } from '../../../../modules/clients/useCases/createClient/CreateClientController';
import { FindAllClientsController } from '../../../../modules/clients/useCases/findAllClients/FindAllClientsController';
import { FindClientByIDController } from '../../../../modules/clients/useCases/findClientByID/FindClientByIDController';
import { ensureAuthenticatedUser } from '../middlewares/ensureAuthenticateUser';

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const findClientByIDController = new FindClientByIDController();
const findAllClientsController = new FindAllClientsController();

clientsRoutes.post('/create', createClientController.handle);
clientsRoutes.get('/find', ensureAuthenticatedUser,findClientByIDController.handle);
clientsRoutes.get('/all', findAllClientsController.handle);
export default clientsRoutes;