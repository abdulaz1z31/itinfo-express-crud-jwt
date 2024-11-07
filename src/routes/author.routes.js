import { Router } from "express";
import { loginAuthor, registerAuthor } from "../controllers/index.controller.js";


export const authorRouter = new Router()


authorRouter.post("/register", registerAuthor)
authorRouter.post("/login", loginAuthor)

