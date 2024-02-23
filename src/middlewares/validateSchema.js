import { wrongSchemaError } from "../utils/errorUtils.js";

export function validateSchemaMiddleware(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      throw wrongSchemaError(validation.error.message);
    }

    next();
  };
}