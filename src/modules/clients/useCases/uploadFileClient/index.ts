import { PrismaRepositoryClient } from "../../../../modules/clients/repositories/prismaRepository/PrismaRepositoryClient";
import { UploadFileClientUseCase } from "../../../../modules/clients/useCases/uploadFileClient/UploadFileClientUseCase";

const prismaRepositoryClient = new PrismaRepositoryClient();
const uploadFileClientUseCase = new UploadFileClientUseCase(prismaRepositoryClient);
export { uploadFileClientUseCase }