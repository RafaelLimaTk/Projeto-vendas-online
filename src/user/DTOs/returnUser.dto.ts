/* eslint-disable prettier/prettier */

import { UserEntity } from '../entities/user.entity';

export class ReturnUserDto {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  email: string;

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;
    this.email = userEntity.email;
  }
}
