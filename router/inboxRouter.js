// external imports
const express = require('express');

// internal imports
const {getInbox} = require('../controller/inboxController');
const {setPageTitle} = require('../middleware/common/decorateHtmlresponse');

const router = express.Router();

// fuctions
router.get('/',setPageTitle("Inbox"), getInbox);

// export
module.exports = router;
