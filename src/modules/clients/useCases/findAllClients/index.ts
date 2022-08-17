import { FindAllClientsUseCase } from "./FindAllClientsUseCase";
import { PrismaRepositoryClient } from '../../repositories/prismaRepository/PrismaRepositoryClient';

const prismaRepositoryClient = new PrismaRepositoryClient()
const findAllClientsUseCase = new FindAllClientsUseCase(prismaRepositoryClient);
export { findAllClientsUseCase}