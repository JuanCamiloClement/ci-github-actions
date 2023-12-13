const server = require('../src/index');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Endpoint', () => {
  test('GET / should show hello world message', async () => {
    const res = await requestWithSupertest.get('/');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
  });
});