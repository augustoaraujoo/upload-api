import { Router } from 'express';
import { CreateClientController } from '../../../../modules/clients/useCases/createClient/CreateClientController';
import { FindClientByIDController } from '../../../../modules/clients/useCases/findClientByID/FindClientByIDController';

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const findClientByIDController = new FindClientByIDController();
clientsRoutes.post('/create', createClientController.handle);
clientsRoutes.get('/find/:id', findClientByIDController.handle);
export { clientsRoutes };