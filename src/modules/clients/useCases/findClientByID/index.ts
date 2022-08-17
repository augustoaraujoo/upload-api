import { PrismaRepositoryClient } from "../../repositories/prismaRepository/PrismaRepositoryClient";
import { FindClientByIDUseCase } from "./FindClientByIDUseCase";

const prismaRepositoryClient = new PrismaRepositoryClient()
const findClientByIDUseCase = new FindClientByIDUseCase(prismaRepositoryClient);

export { findClientByIDUseCase }