"use strict";
exports.__esModule = true;
exports.findClientByIDUseCase = void 0;
var PrismaRepositoryClient_1 = require("../../../../modules/clients/repositories/prismaRepository/PrismaRepositoryClient");
var FindClientByIDUseCase_1 = require("../../../../modules/clients/useCases/findClientByID/FindClientByIDUseCase");
var prismaRepositoryClient = new PrismaRepositoryClient_1.PrismaRepositoryClient();
var findClientByIDUseCase = new FindClientByIDUseCase_1.FindClientByIDUseCase(prismaRepositoryClient);
exports.findClientByIDUseCase = findClientByIDUseCase;
//# sourceMappingURL=index.js.map