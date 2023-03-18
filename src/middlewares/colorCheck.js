module.exports = (req, res, next) => {
    if(req.cookies.color){
        req.session.user = req.cookies.colorCheck;
    }
    next();
}