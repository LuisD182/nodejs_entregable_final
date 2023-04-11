const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const authValidator = [
  check("email", "Email error")
    .exists()
    .withMessage("Email cannot be found may not exist")
    .notEmpty()
    .withMessage("Empty value on email")
    .isString()
    .withMessage("Email must be an string")
    .isLength({ min: 7 })
    .withMessage("Email must have at least 7 characters")
    .isEmail()
    .withMessage("Incorrect email format"),
  check("password", "Password error")
    .exists()
    .withMessage("Password cannot be found may not exist")
    .notEmpty()
    .withMessage("Empty value on password")
    .isLength({ min: 6 })
    .withMessage("Password must have at least 6 characters"),


  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
    authValidator
}