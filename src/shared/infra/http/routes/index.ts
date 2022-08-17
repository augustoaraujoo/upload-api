import { Router } from "express";
import { authRouter } from "./auth.routes";
import clientsRoutes from "./clients.routes";
import { uploadRoutes } from "./upload.routes";

const routes = Router();

routes.use("/clients", clientsRoutes)
routes.use("/client", authRouter)
routes.use("/create", uploadRoutes);
export { routes };