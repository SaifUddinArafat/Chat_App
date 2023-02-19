// external imports
const express = require("express");

const router = express.Router();

// internal imports 
const {getUser} = require("../controller/userController");
const {setPageTitle} = require("../middleware/common/decorateHtmlresponse");

// functions
router.get('/',setPageTitle("Users"), getUser);

// exports
module.exports = router;