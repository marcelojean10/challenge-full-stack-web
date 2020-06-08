import { EntityRepository, Repository } from 'typeorm';
import Students from '../models/Students';

@EntityRepository(Students)
export default class StudentsRepository extends Repository<Students> {
  public async findByRA(ra: string): Promise<Students[]> {
    return this.find({
      where: {
        ra,
      },
    });
  }
}
