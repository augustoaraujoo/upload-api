
/*tenha calma senhor sênior eu sei dos padrões do solid e os kr4 , dps eu vou refatorar tudo isso , estou sem  paciência agr !! :) */

const dotenv = require('dotenv');
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";
import router from './routes/user'
const PORT = process.env.PORT || 3333;

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use("/user", router);

app.listen(PORT, () => console.log("Server is running"));
