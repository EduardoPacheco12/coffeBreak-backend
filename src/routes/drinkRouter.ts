import { Router } from "express";
import { addDrinkToCart, getDrinksByCategory, getDrinksCategory } from "../controllers/drinkController.js";
import { validateTokenMiddleware } from "../middlewares/validateToken.js";

const router = Router();

router.get("/coffebreak/drinks/category/list", validateTokenMiddleware, getDrinksCategory);
router.get("/coffebreak/drinks/category/list/:categoryId", validateTokenMiddleware, getDrinksByCategory);
router.post("/coffebreak/drink/:drinkId", validateTokenMiddleware, addDrinkToCart);

export default router;
