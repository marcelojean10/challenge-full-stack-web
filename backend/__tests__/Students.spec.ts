import request from 'supertest';
import knex from '../src/database/connection';
import app from '../src/server';

it('should be able to create a new student', async () => {
    const name = 'Marcelo Kozvoski';
    const email = 'richardkozvoski@io.com.ea';
    const cpf = '87335511010';

    await knex("students").insert({
      name, 
      email, 
      cpf
    });
    
    const response = await request(app)
    .post('/student')
    .send({
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

    await knex('students')
    .where('ra', '=', ra)
    .update({
      name,
      email
    });
    
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

  await knex('students').where('ra', '=', ra).del();

  const response = await request(app).delete(`/student/${ra}`);

  expect(response.status).toBe(200);
});

it('should be abe to find a student by RA', async () => {

  const ra = 2;

  await knex.select()
    .table('students')
    .where('ra','=', ra);

  const response = await request(app).get(`/student/${ra}`);

  expect(response.status).toBe(200);

});

it('should be abe to list all students', async () => {

  await knex.select().table('students');

  const response = await request(app).get('/students');

  expect(response.status).toBe(200);

});