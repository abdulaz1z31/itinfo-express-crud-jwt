import { Router } from "express";
import {
  deleteAuthorById,
  deleteCartegoryById,
  deleteUserById,
  getAllAthores,
  getAllCartegories,
  getAllUsers,
  getAuthorById,
  getCartegoryById,
  getUserById,
  loginUser,
  registerUser,
  updateAuthorById,
  updateUserById,
} from "../controllers/index.controller.js";

export const userRouter = new Router();

//user, admin , SuperAmin uchun faqat
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

//superAdmin va admin userlar malumotlarni ustida ishlashi uchun superAdmin adminni ham chpishi mumkun
userRouter.get("/user", getAllUsers);
userRouter.get("/user/:id", getUserById);
userRouter.post("/user/:id", updateUserById);
userRouter.delete("/user/:id", deleteUserById);

//SuperAdmin uchun hamma narsaga dostup bor adminda esa hammasiga ham emas
userRouter.get("/author", getAllAthores);
userRouter.get("/author/:id", getAuthorById);
userRouter.post("/author/:id", updateAuthorById);
userRouter.delete("/author/:id", deleteAuthorById);

//SuperAdmin uchun hamma narsaga dostup bor adminda esa hammasiga ham emas
userRouter.get("/cartegory", getAllCartegories);
userRouter.get("/cartegory/:id", getCartegoryById);
userRouter.post("/cartegory/:id", updateUserById);
userRouter.delete("/cartegory/:id", deleteCartegoryById);
