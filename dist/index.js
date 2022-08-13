"use strict";
/*tenha calma senhor sênior eu sei dos padrões do solid e os kr4 , dps eu vou refatorar tudo isso , estou sem  paciência agr !! :) */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv = require('dotenv');
dotenv.config();
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var cors_1 = __importDefault(require("cors"));
var user_1 = __importDefault(require("./routes/user"));
var PORT = process.env.PORT || 3333;
// Middleware
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
// Route
app.use("/user", user_1["default"]);
app.listen(PORT, function () { return console.log("Server is running"); });
//# sourceMappingURL=index.js.map