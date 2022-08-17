"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.app = void 0;
require('dotenv').config();
require("express-async-errors");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
exports.app = app;
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use('/files', express_1["default"].static(__dirname + '/uploads'));
app.use(routes_1.routes);
app.use(function (err, req, res, next) {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});
//# sourceMappingURL=app.js.map