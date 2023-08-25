// src/routes.js

const express = require('express');
const { getAllContacts, createContact } = require('./datastore.js');

 const router = express.Router();

// GET all contacts
router.get('/', (req, res) => {
  const contacts = getAllContacts();
  res.json(contacts);
});

// POST a new contact
router.post('/', (req, res) => {
  const { name, email } = req.body;
  const newContact = createContact(name, email);
  res.status(201).json(newContact);
});

module.exports = { router };