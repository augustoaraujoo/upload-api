"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cloudinary_1 = require("cloudinary");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
exports["default"] = cloudinary_1.v2;
//# sourceMappingURL=cloudinary.js.map