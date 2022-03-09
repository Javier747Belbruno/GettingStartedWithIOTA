import express from "express";
import { createUser, searchUser } from "../controllers/user";

export default function userRouter() {
  const router = express.Router();

  router.post("/:id/name/:name", createUser);
  router.get("/:id", searchUser);

  return router;
}
