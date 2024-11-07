import { Router } from "express";
import { createCartegory, getAllCartegories, getCartegoryById } from "../controllers/index.controller.js";

export const cartegoryRouter = new Router()


cartegoryRouter.post("/cartegory", createCartegory)
cartegoryRouter.get("/cartegory", getAllCartegories)
cartegoryRouter.get("/cartegory/:id", getCartegoryById)
