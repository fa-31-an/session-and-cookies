const { check } = require("express-validator");

module.exports = [
    check("name")
    .notEmpty()
    .withMessage("Debe ingresar un nombre"),
    
    check("email")
    .notEmpty()
    .withMessage("Debe ingresar un email").bail()
    .isEmail()
    .withMessage("Debe ingresar un email válido"),

    check("age")
    .isNumeric()
    .withMessage("La edad debe ser un número"),
];