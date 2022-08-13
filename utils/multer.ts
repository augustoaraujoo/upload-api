import { Request } from "express";
import multer from "multer";

import path from "path"; 

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(null, false);
      return;
    }
    cb(null, true);
  },
});