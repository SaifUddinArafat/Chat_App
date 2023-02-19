// get login page
function getLogin(req, res, next) {
    res.render("index");
}

// exprots
module.exports = {
    getLogin,
};