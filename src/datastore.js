// src/dataStore.js
const { v4: uuidv4 } = require('uuid');

let contacts = [];

// Function to get all contacts
 function getAllContacts() {
  return contacts;
}

// Function to create a new contact
 function createContact(name, email) {
  const newContact = { id: uuidv4(), name, email };
  contacts.push(newContact);
  return newContact;
}

module.exports = { getAllContacts, createContact };