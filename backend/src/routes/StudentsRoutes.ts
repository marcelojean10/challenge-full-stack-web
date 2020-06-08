import express from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Students from '../app/models/Students';
import StudentsRepository from '../app/repositories/StudentsRepository';
import '../database/connection';
import { ValidationResult, object, string, number } from 'joi';

const studentsRouter = express.Router();

studentsRouter.get('/students', async (req, res) => {
  try {
    const repository = await getRepository(Students);
    const students = await repository.find();

    return res.json(students);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

studentsRouter.get('/student/:ra', async (req, res) => {
  try {
    const { ra } = req.params;

    const schema = object({
      ra: number().required(),
    });

    const validators: ValidationResult<any> = schema.validate(req.params);

    if (validators.error) {
      return res.status(400).json({
        error: true,
        message: validators.error.message,
      });
    }

    const repository = getCustomRepository(StudentsRepository);
    const result = await repository.findByRA(ra);
    return res.json(result);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

studentsRouter.post('/student', async (req, res) => {
  try {
    const schema = object({
      ra: number(),
      name: string()
        .min(6)
        .required(),
      email: string()
        .min(6)
        .required()
        .email(),
      cpf: number().required(),
    });

    const validators: ValidationResult<any> = schema.validate(req.body);

    if (validators.error)
      return res.status(400).json({
        error: true,
        message: validators.error.message,
      });

    const repository = getRepository(Students);
    await repository.save(req.body);
    return res.status(201).json({
      message: `${req.body.name} inserted with success in database.`,
    });
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

studentsRouter.put('/student/:ra', async (req, res) => {
  try {
    const { ra } = req.params;

    const schema = object({
      name: string()
        .min(6)
        .required(),
      email: string()
        .min(6)
        .required()
        .email(),
    });

    const validators: ValidationResult<any> = schema.validate(req.body);

    if (validators.error)
      return res.status(400).json({
        error: true,
        message: validators.error.message,
      });

    const repository = getRepository(Students);

    const studentsUpdate = await repository.findOne({
      where: { ra },
    });

    await repository.save({
      ...studentsUpdate,
      ...req.body,
    });

    return res.status(201).json({ message: 'Student updated with success.' });
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

studentsRouter.delete('/student/:ra', async (req, res) => {
  try {
    const { ra } = req.params;

    const schema = object({
      ra: number().required(),
    });

    const validators: ValidationResult<any> = schema.validate(req.params);

    if (validators.error)
      return res.status(400).json({
        error: true,
        message: validators.error.message,
      });

    const repository = await getRepository(Students);
    await repository.delete(ra);
    return res.json({ message: 'Student deleted with success.' });
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

export default studentsRouter;
