import Joi from "joi";
import { signInBody, signUpBody } from "../types/authTypes.js";

export const signUpSchema = Joi.object<signUpBody>({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
  name: Joi.string().required(),
  pictureUrl: Joi.string().uri().required(),
});

export const signInSchema = Joi.object<signInBody>({
  email: Joi.string().email().required(),
  password: Joi.string().min(7).required(),
});
