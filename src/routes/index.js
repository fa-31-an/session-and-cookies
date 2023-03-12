var express = require('express');
var router = express.Router();
const { index, submitData, } = require('../controller/indexController');
const formValidator = require("../validator/formValidator");
//const colorCheck = require("../middlewares/colorCheck");

/* GET home page. */
router.get('/', index);
router.post('/', formValidator, submitData);

module.exports = router;
