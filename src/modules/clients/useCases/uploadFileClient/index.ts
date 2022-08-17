import { PrismaRepositoryClient } from "../../repositories/prismaRepository/PrismaRepositoryClient";
import { UploadFileClientUseCase } from "../../useCases/uploadFileClient/uploadFileClientUseCase";

const prismaRepositoryClient = new PrismaRepositoryClient();
const uploadFileClientUseCase = new UploadFileClientUseCase(prismaRepositoryClient);
export { uploadFileClientUseCase }