import express from 'express';

import StudentsController from './app/controller/StudentsController';

const routes = express.Router();
const studentsController = new StudentsController();

routes.get("/students", studentsController.index);
routes.get("/student/:ra", studentsController.findByRA);
routes.post("/student", studentsController.create);
routes.put("/student/:ra", studentsController.update);
routes.delete("/student/:ra", studentsController.delete);

export default routes;