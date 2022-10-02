import { Router } from "express";
import { searchUser } from "../controllers/userController.js";
import { validateTokenMiddleware } from "../middlewares/validateToken.js";

const router = Router();

router.get("/coffebreak/home/logged", validateTokenMiddleware, searchUser);

export default router;
