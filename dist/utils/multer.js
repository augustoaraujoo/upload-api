"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var multer_1 = __importDefault(require("multer"));
var crypto = require('crypto');
var path_1 = __importDefault(require("path"));
// Multer config
module.exports = (0, multer_1["default"])({
    storage: multer_1["default"].diskStorage({
        // função que ira criar uma hash antes do nome do arquivo
        // para evitar que 2 arquivos tenham o mesmo nome
        // filename
        filename: function (req, file, cb) {
            crypto.randomBytes(16, function (err, hash) {
                if (err)
                    cb(err, 'error');
                var fileName = "".concat(hash.toString('hex'), "-").concat(file.originalname);
                cb(null, fileName);
            });
        }
    }),
    limits: { fileSize: 2 * 1024 * 1024 },
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