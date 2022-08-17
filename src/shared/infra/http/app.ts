require('dotenv').config();

import 'express-async-errors'
import cors from "cors";
import { NextFunction, Request, Response } from 'express'
import express from "express";
import { routes } from "./routes";
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use('/files', express.static(__dirname + '/uploads'));
app.use(routes);
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
})
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })

})
export { app };