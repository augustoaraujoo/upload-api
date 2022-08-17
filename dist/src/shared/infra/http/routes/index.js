"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var clients_routes_1 = __importDefault(require("./clients.routes"));
var upload_routes_1 = require("./upload.routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/clients", clients_routes_1["default"]);
routes.use("/create", upload_routes_1.uploadRoutes);
//# sourceMappingURL=index.js.map