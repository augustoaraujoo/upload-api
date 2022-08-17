"use strict";
exports.__esModule = true;
exports.uploadFileClientUseCase = void 0;
var PrismaRepositoryClient_1 = require("../../../../modules/clients/repositories/prismaRepository/PrismaRepositoryClient");
var UploadFileClientUseCase_1 = require("../../../../modules/clients/useCases/uploadFileClient/UploadFileClientUseCase");
var prismaRepositoryClient = new PrismaRepositoryClient_1.PrismaRepositoryClient();
var uploadFileClientUseCase = new UploadFileClientUseCase_1.UploadFileClientUseCase(prismaRepositoryClient);
exports.uploadFileClientUseCase = uploadFileClientUseCase;
//# sourceMappingURL=index.js.map