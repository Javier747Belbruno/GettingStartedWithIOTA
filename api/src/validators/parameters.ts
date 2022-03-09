import { param } from "express-validator";

export function checkAddress() {
  return param("address")
    .notEmpty()
    .withMessage("Address is required")
    .isString()
    .withMessage("Address must be a string")
    .isLength({ min: 64, max: 64 })
    .withMessage("Address must be 64 characters long");
}
