import { Router } from "express";
import { getBooksByCategory, getBooksCategory } from "../controllers/bookControllers.js";
import { validateTokenMiddleware } from "../middlewares/validateToken.js";

const router = Router();

router.get("/coffebreak/books/category/list", validateTokenMiddleware, getBooksCategory);
router.get("/coffebreak/books/category/list/:categoryId", validateTokenMiddleware, getBooksByCategory);

export default router;
