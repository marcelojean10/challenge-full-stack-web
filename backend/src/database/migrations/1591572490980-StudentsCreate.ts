import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class StudentsCreate1591572490980 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(
            new Table({
                name: 'students',
                columns: [
                    {
                        name: 'ra',
                        isPrimary: true,
                        type: 'integer',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropTable('students');
    }
}
