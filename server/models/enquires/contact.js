// models/ContactForm.js
const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
