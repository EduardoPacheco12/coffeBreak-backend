import { Router } from "express";
import { addDrinkToCart, getDrinksByCategory, getDrinksCart, getDrinksCategory } from "../controllers/drinkController.js";
import { validateTokenMiddleware } from "../middlewares/validateToken.js";

const router = Router();

router.get("/coffebreak/drinks/category/list", validateTokenMiddleware, getDrinksCategory);
router.get("/coffebreak/drinks/category/list/:categoryId", validateTokenMiddleware, getDrinksByCategory);
router.post("/coffebreak/drink/:drinkId", validateTokenMiddleware, addDrinkToCart);
router.get("/coffebreak/drinks/cart", validateTokenMiddleware, getDrinksCart);

export default router;
