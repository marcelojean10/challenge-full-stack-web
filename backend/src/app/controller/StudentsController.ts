import { Request, Response } from 'express';
import knex from '../../database/connection';

import StudentsValidators from '../validators/StudentsValidators';
const studentsValidators = new StudentsValidators();

/**
 * Controller responsable for put and output of data and info students.
 * 
 * @author Marcelo Jean O. Pinheiro <marcelojeam1@gmail.com>
 */
class StudentsController {

  /**
   * List all students.
   * 
   * @param request This object comes with the requisition.
   * @param response This object define a response.
   */
  async index(request: Request, response: Response) {
    const students = await knex.select().table('students');

    return response.json(students);
  }

  /**
   * Create a student.
   * 
   * @param request This object comes with the requisition.
   * @param response This object define a response.
   */
  async create(request: Request, response: Response) {
    const {
      ra,
      name,
      email,
      cpf
    } = request.body;

    const validators = studentsValidators.create(request, response);

    if (!validators) {
      return response.json(validators);
    }

    await knex("students").insert({
      ra,
      name,
      email,
      cpf
    });

    return response.json({
      message: `${name} inserted with success in database.`
    });
  }

  /**
   * Update the informations a specified student.
   * 
   * @param request This object comes with the requisition.
   * @param response This object define a response.
   */
  async update(request: Request, response: Response) {
    const { ra } = request.params;
    const { name, email } = request.body;

    const validators = studentsValidators.update(request, response);

    if (!validators) return response.json(validators);

    const verifyStudent = await knex('students').where('ra', ra);

    if (!verifyStudent) return response.json("Student not found.");

    await knex('students')
      .where('ra', '=', ra)
      .update({
        name,
        email
      })

    return response.json({ message: "Student updated with success." });
  }

  /**
   * Delete a student.
   * 
   * @param request This object comes with the requisition.
   * @param response This object define a response.
   */
  async delete(request: Request, response: Response) {
    const { ra } = request.params;

    const validators = studentsValidators.delete(request, response);

    if (!validators) return response.json(validators);

    await knex('students').where('ra', '=', ra).del();

    return response.json({ message: "Student deleted with success." });
  }

  /**
   * Get student by RA.
   * 
   * @param request 
   * @param response 
   */
  async findByRA(request: Request, response: Response) {
    const { ra } = request.params;

    const validators = studentsValidators.delete(request, response);

    if (!validators) return response.json(validators);

    const student = await knex.select()
      .table('students')
      .where('ra', '=', ra);

    return response.json({ student });
  }
}

export default StudentsController;
