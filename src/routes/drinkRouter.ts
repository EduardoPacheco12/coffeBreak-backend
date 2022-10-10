import { Router } from "express";
import { addDrinkToCart, deleteDrinkCart, getDrinksByCategory, getDrinksCart, getDrinksCategory } from "../controllers/drinkController.js";
import { validateTokenMiddleware } from "../middlewares/validateToken.js";

const router = Router();

router.get("/coffebreak/drinks/category/list", validateTokenMiddleware, getDrinksCategory);
router.get("/coffebreak/drinks/category/list/:categoryId", validateTokenMiddleware, getDrinksByCategory);
router.post("/coffebreak/drink/:drinkId", validateTokenMiddleware, addDrinkToCart);
router.get("/coffebreak/drinks/cart", validateTokenMiddleware, getDrinksCart);
router.delete("/coffebreak/drinks/cart/:drinkId", validateTokenMiddleware, deleteDrinkCart);

export default router;
