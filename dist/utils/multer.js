"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
// Multer config
module.exports = (0, multer_1["default"])({
    storage: multer_1["default"].diskStorage({}),
    fileFilter: function (req, file, cb) {
        var ext = path_1["default"].extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(null, false);
            return;
        }
        cb(null, true);
    }
});
//# sourceMappingURL=multer.js.map