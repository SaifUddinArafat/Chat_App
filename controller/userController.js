// get users
function getUser(req, res, next) {
    res.render("users");
}

// exports
module.exports = {
    getUser,
};