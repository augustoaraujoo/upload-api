import { Router } from "express";
import { clientsRoutes } from "./clients.routes";
import { uploadRoutes } from "./upload.routes";

const routes = Router();

routes.use("/clients",clientsRoutes)
routes.use("/create", uploadRoutes);
export { routes };