"use strict";
exports.__esModule = true;
exports.uploadRoutes = void 0;
var express_1 = require("express");
var UploadFileClientController_1 = require("../../../../modules/clients/useCases/uploadFileClient/UploadFileClientController");
var upload = require("../../../../../utils/multer");
var uploadRoutes = (0, express_1.Router)();
exports.uploadRoutes = uploadRoutes;
var uploadFileClientController = new UploadFileClientController_1.UploadFileClientController();
uploadRoutes.post('/upload/:id', upload.single("image"), uploadFileClientController.handle);
//# sourceMappingURL=upload.routes.js.map