import { PrismaRepositoryClient } from "../../../../modules/clients/repositories/prismaRepository/PrismaRepositoryClient";
import { FindClientByIDUseCase } from "../../../../modules/clients/useCases/findClientByID/FindClientByIDUseCase";

const prismaRepositoryClient = new PrismaRepositoryClient()
const findClientByIDUseCase = new FindClientByIDUseCase(prismaRepositoryClient);

export { findClientByIDUseCase }