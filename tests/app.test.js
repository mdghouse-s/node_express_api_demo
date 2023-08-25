// tests/app.test.js

const request = require('supertest');
const app = require('../src/app.js');
const { getAllContacts } = require('../src/datastore.js');

describe('Test API Endpoints', () => {
  beforeEach(() => {
    // Reset contacts data before each test
    getAllContacts().length = 0;
  });

  it('should get empty contacts array initially', async () => {
    const response = await request(app).get('/contacts');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should create a new contact', async () => {
    const newContact = { name: 'John Doe', email: 'johndoe@example.com' };
    const response = await request(app)
      .post('/contacts')
      .send(newContact);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newContact.name);
    expect(response.body.email).toBe(newContact.email);

    const contacts = getAllContacts();
    expect(contacts.length).toBe(1);
    expect(contacts[0]).toEqual(response.body);
  });

  it('should check if the API is up and running', async () => {
    const response = await request(app).get('/status');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('API is up and running');
  });
});
