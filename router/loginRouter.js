// external imports
const express = require("express");

// internal imports
const {getLogin} = require("../controller/loginController");
const { setPageTitle } = require("../middleware/common/decorateHtmlresponse");

const router = express.Router();

// Login Router
router.get('/',setPageTitle("Login") ,getLogin);

module.exports = router;