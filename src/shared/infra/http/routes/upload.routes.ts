import { Router } from 'express';
import { UploadFileClientController } from '../../../../modules/clients/useCases/uploadFileClient/UploadFileClientController';

const upload = require("../../../../../utils/multer");

const uploadRoutes = Router();

const uploadFileClientController = new UploadFileClientController();

uploadRoutes.post('/upload/:id', upload.single("image"), uploadFileClientController.handle);

export { uploadRoutes };