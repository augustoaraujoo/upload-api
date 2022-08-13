import { Request } from "express";
import multer from "multer";
const crypto = require('crypto');
import path from "path";

// Multer config
module.exports = multer({
  storage: multer.diskStorage({
    // função que ira criar uma hash antes do nome do arquivo
    // para evitar que 2 arquivos tenham o mesmo nome
    // filename
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
      crypto.randomBytes(16, (err: Error, hash: any) => {
        if (err) cb(err, 'error');
        const fileName = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, fileName);
      })
    }
  }),
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(null, false);
      return;
    }
    cb(null, true);
  },
});