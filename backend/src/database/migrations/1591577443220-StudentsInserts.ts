import { MigrationInterface, QueryRunner } from 'typeorm';

export default class StudentsInserts1591577443220
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO students (ra, name, email, cpf) VALUES ('1235','Ana Carolina', 'anacarol@gmail.com', '873355220110')"
        );
        await queryRunner.query(
            "INSERT INTO students (ra, name, email, cpf) VALUES ('1234','Marcelo Jean', 'mjean@gmail.com', '873355220200')"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM students WHERE name = 'Ana Carolina'");
        await queryRunner.query("DELETE FROM students WHERE name = 'Marcelo Jean'");
    }
}
