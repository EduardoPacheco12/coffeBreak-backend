import { Router } from "express";
import { getBooksCategory } from "../controllers/bookControllers.js";
import { validateTokenMiddleware } from "../middlewares/validateToken.js";

const router = Router();

router.get("/coffebreak/books/category/list", validateTokenMiddleware, getBooksCategory);

export default router;
