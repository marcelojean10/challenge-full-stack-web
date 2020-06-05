import { Request, Response } from 'express';
import {
  ValidationResult,
  object,
  string,
  number
} from 'joi';


/**
 * Controller responsible for validator put of data before save in database.
 * 
 * @author Marcelo Jean O. Pinheiro <marcelojeam1@gmail.com>
 */
class StudentsValidators {

  /**
   *  Verify necessary infos before inserted a new student.
   * 
   * @param request 
   * @param response 
   */
  async create(request: Request, response: Response) {
    const schema = object({
      ra: number(),
      name: string().min(6).required(),
      email: string().min(6).required().email(),
      cpf: number().required()
    });

    const validators: ValidationResult<any> = schema.validate(request.body);

    if (validators.error) return response.status(400).json({ message: validators.error.message });

  }

  /**
  *  Verify necessary infos before updated student.
  * 
  * @param request 
  * @param response 
  */
  async update(request: Request, response: Response) {
    const schema = object({
      name: string().min(6).required(),
      email: string().min(6).required().email()
    });

    const validators: ValidationResult<any> = schema.validate(request.body);

    if (validators.error) return response.status(400).json({ message: validators.error.message });

  }

  /**
   * Verify necessary infos before delete.
   * 
   * @param request 
   * @param response 
   */
  async delete(request: Request, response: Response) {
    const schema = object({
      ra: number().required()
    });

    const validators: ValidationResult<any> = schema.validate(request.params);

    if (validators.error) return response.status(400).json({ message: validators.error.message });
  }
}

export default StudentsValidators;