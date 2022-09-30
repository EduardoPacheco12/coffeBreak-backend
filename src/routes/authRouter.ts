import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";
import { signIn, signUp } from "../controllers/authController.js";

const router = Router();

router.post("/coffebreak/sign-up", validateSchemaMiddleware(signUpSchema), signUp);
router.post("/coffebreak/sign-in", validateSchemaMiddleware(signInSchema), signIn);

export default router;
