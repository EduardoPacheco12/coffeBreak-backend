import { Router } from "express";
import { getDrinksCategory } from "../controllers/drinkController.js";
import { validateTokenMiddleware } from "../middlewares/validateToken.js";

const router = Router();

router.get("/coffebreak/drinks/category/list", validateTokenMiddleware, getDrinksCategory);

export default router;
