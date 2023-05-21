/* eslint-disable prettier/prettier */

import { ReturnAddressDto } from 'src/address/DTOs/returnAddress.dto';
import { UserEntity } from '../entities/user.entity';

export class ReturnUserDto {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  email: string;
  addresses?: ReturnAddressDto[];

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;
    this.email = userEntity.email;

    this.addresses = userEntity.addresses
      ? userEntity.addresses.map((address) => new ReturnAddressDto(address))
      : undefined;
  }
}
