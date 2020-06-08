import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'students' })
export default class Students {
  @PrimaryColumn()
  ra: number;

  @Column({
    length: 100,
    unique: true,
  })
  name: string;

  @Column({
    length: 100,
  })
  email: string;

  @Column({
    length: 11,
  })
  cpf: string;
}
