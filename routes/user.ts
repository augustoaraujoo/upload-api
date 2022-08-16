// FILE DEPRECATED
const router = require("express").Router();
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

router.get('/allUsers', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        photos: true
      }
    });
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
      },
      include: {
        photos: true
      }
    })
    res.json(user).status(200);
  } catch (error) {
    console.log(error);
  }
})

export default router;
