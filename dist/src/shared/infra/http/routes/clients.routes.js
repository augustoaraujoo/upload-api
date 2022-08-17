"use strict";
exports.__esModule = true;
var express_1 = require("express");
var CreateClientController_1 = require("../../../../modules/clients/useCases/createClient/CreateClientController");
var FindClientByIDController_1 = require("../../../../modules/clients/useCases/findClientByID/FindClientByIDController");
var clientsRoutes = (0, express_1.Router)();
var createClientController = new CreateClientController_1.CreateClientController();
var findClientByIDController = new FindClientByIDController_1.FindClientByIDController();
clientsRoutes.post('/create', createClientController.handle);
clientsRoutes.get('/find/:id', findClientByIDController.handle);
exports["default"] = clientsRoutes;
//# sourceMappingURL=clients.routes.js.map