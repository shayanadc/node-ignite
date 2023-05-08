const request = require('supertest');

const app = require('./server');

describe('Test JSON response', () => {
  it('should return JSON object', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({name: "John Doe"});
  });

  it('should return JSON object', async () => {
    const response = await request(app).post('/');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({name: "Doe John"});
  });
});
