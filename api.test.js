const request = require('supertest');

const app = require('./server');

describe('Test JSON response', () => {
  it('should respond with "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({"message": "Hello"});
  });
});
