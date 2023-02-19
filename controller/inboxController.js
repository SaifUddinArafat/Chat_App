const decroateHtmlresponse = require("../middleware/common/decorateHtmlresponse");

// get inbox
function getInbox(req, res, next) {
    res.render("inbox");
}

module.exports = {
    getInbox,
};