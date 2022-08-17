import { PrismaRepositoryClient } from "../../repositories/prismaRepository/PrismaRepositoryClient";
import { UploadFileClientUseCase } from "./uploadFileClientUseCase";

const prismaRepositoryClient = new PrismaRepositoryClient();
const uploadFileClientUseCase = new UploadFileClientUseCase(prismaRepositoryClient);
export { uploadFileClientUseCase }