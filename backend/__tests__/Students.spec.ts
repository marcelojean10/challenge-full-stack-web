import request from 'supertest';
import { createConnection } from 'typeorm';
import app from '../src/server';

it('should be able to create a new student', async () => {

  const ra = 66;
  const name = 'Marcelo Kozvoski';
  const email = 'richardkozvoski@io.com.ea';
  const cpf = '87335511010';

  const response = await request(app)
    .post('/student')
    .send({
      ra,
      name,
      email,
      cpf
    });

  expect(response.status).toBe(200);
});

it('should be able to update a student', async () => {

  const ra = '1';
  const name = 'Marcelo Kozvoski';
  const email = 'richardkozvoski@io.com.ea';

  const response = await request(app)
    .put(`/student/${ra}`)
    .send({
      name,
      email
    });

  expect(response.status).toBe(200);
});

it('should be abe to delete a student', async () => {

  const ra = '1';

  const response = await request(app).delete(`/student/${ra}`);

  expect(response.status).toBe(200);
});

it('should be abe to find a student by RA', async () => {

  const ra = 2;

  const response = await request(app).get(`/student/${ra}`);

  expect(response.status).toBe(200);

});

it('should be abe to list all students', async () => {

  const response = await request(app).get('/students');

  expect(response.status).toBe(200);

});