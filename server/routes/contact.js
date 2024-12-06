const express = require('express');
const router = express.Router();
 
const {  addContactDetails, getContactDetails } = require('../controller/contactus/contactcontroller');

// Route to add contact details with image upload
// router.post('/add',   addContactDetails); // 'logos' is the field name for image uploads
// router.get("/getcontact", getContactDetails);
module.exports = router;
