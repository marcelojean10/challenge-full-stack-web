import { Router } from 'express';
import StudentsRoutes from './StudentsRoutes';
import SwaggerRoutes from './SwaggerRoutes';

const routes = Router();

routes.use(SwaggerRoutes);
routes.use(StudentsRoutes);

export default routes;
