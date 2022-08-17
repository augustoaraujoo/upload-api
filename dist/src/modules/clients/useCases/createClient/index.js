"use strict";
exports.__esModule = true;
exports.createClientUseCase = void 0;
var PrismaRepositoryClient_1 = require("../../repositories/prismaRepository/PrismaRepositoryClient");
var CreateClientUseCase_1 = require("./CreateClientUseCase");
var prismaRepositoryClient = new PrismaRepositoryClient_1.PrismaRepositoryClient();
var createClientUseCase = new CreateClientUseCase_1.CreateClientUseCase(prismaRepositoryClient);
exports.createClientUseCase = createClientUseCase;
//# sourceMappingURL=index.js.map