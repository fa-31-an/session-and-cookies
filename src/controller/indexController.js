const { validationResult } = require("express-validator");

module.exports = {
    index: (req, res) => {
        res.render('index', {
            title: "Session & Validation",
        });
    },
    submitData: (req, res) => {
        const errors = validationResult(req);
        
        if (errors.isEmpty()){
            req.session.user = {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age,
                color: req.body.color,
                recordar: req.body.recordar,
            }

            if (req.session.user.recordar) {
                res.cookie("colorCheck", req.session.user.color, { maxAge: 1800000 });
            };

            res.redirect("/bienvenido");
        } else {
            res.render("index", {
            title: "Session & Validation",
            errors: errors.mapped(),
            })
        };
    },
    bienvenido: (req, res) => {
        let color = req.session.user.color;
        res.render("userColor", {
            title: `Bienvenido`,
            color,
        })
    },
    olvidar: (req, res) => {
        req.session.destroy();
        res.cookie("recordar-color", null, { maxAge: -1 });
        res.redirect("/");
    },
};