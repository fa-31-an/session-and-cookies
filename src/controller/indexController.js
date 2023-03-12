const { validationResult } = require("express-validator");

module.exports = {
    index: (req, res) => {
        res.render('index', {
            title: "Session & Validation",
        });
    },
    submitData: (req, res) => {
        let errors = validationResult(req);
        
        if (errors.isEmpty()){
            let userData = {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
            }
            res.redirect("/", {
                userData,
            });
        } else {
            res.render("index", {
            title: "Session & Validation",
            errors: errors.mapped(),
            })
        };
    },
};