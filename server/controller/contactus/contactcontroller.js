const ContactUs = require('../../models/contact/contactus');
const ContactForm = require('../../models/enquires/contact');

exports.addContactDetails = async (req, res) => {
  try {
    const contactData = req.body;

    const newContact = new ContactUs(contactData);
    await newContact.save();

    res.status(201).json({ message: 'Contact details saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving contact details' });
  }
};

exports.getContactDetails = async (req, res) => {
  try {
    // Fetch all contact details from the database
    const contactDetails = await ContactUs.find();

    if (!contactDetails) {
      return res.status(404).json({ error: 'No contact details found' });
    }

    res.status(200).json(contactDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching contact details' });
  }
};

// controllers/contactController.js

// Save the form data
const saveContactForm = async (req, res) => {
  const { name, email, mobile, message } = req.body;

  try {
    const newContactForm = new ContactForm({
      name,
      email,
      mobile,
      message
    });

    await newContactForm.save();
    res.status(201).json({ success: true, message: 'Form data saved successfully.' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, message: 'Failed to save form data' });
  }
};

module.exports = { saveContactForm };
