var express = require('express');
var router = express.Router();
const { index, submitData, bienvenido, olvidar, } = require('../controller/indexController');
const formValidator = require("../validator/formValidator");
const colorCheck = require("../middlewares/colorCheck");

/* GET home page. */
router.get('/', index);
router.post('/', formValidator, colorCheck, submitData);
router.get('/bienvenido', bienvenido);
router.post('/bienvenido', formValidator, colorCheck, olvidar);

module.exports = router;
