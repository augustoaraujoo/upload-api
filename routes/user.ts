const router = require("express").Router();
const upload = require("../utils/multer");
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import v2 from "../utils/cloudinary";
const prisma = new PrismaClient();
interface File {
  file?: any;
  path: any;
}
router.post("/register", async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        username
      }
    })
    res.json(user).status(200);
  } catch (error) {
    console.log(error);
  }
})
router.get('/allUsers', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users).status(200);
  } catch (error) {
    console.log(error);
  }
})
router.get('/userByID/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    })
    res.json(user).status(200);
  } catch (error) {
    console.log(error);
  }
})

router.post("/upload", upload.single("image"), async (req: Request, res: Response) => {
  try {
    const { path } = req.file as File;
    console.log(path);
    const result = await v2.uploader.upload(path);

    res.json(result).status(200);

  } catch (err) {
    console.log(err);
  }
});

export default router;