import { Router } from "express";
import { addBookToCart, getBooksByCategory, getBooksCategory } from "../controllers/bookControllers.js";
import { validateTokenMiddleware } from "../middlewares/validateToken.js";

const router = Router();

router.get("/coffebreak/books/category/list", validateTokenMiddleware, getBooksCategory);
router.get("/coffebreak/books/category/list/:categoryId", validateTokenMiddleware, getBooksByCategory);
router.post("/coffebreak/book/:bookId", validateTokenMiddleware, addBookToCart);

export default router;
