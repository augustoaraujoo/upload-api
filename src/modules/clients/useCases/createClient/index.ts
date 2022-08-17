import { PrismaRepositoryClient } from "../../repositories/prismaRepository/PrismaRepositoryClient";
import { CreateClientUseCase } from "./CreateClientUseCase";

const prismaRepositoryClient = new PrismaRepositoryClient();
const createClientUseCase = new CreateClientUseCase(prismaRepositoryClient);
export { createClientUseCase };