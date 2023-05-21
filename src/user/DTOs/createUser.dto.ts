/* eslint-disable prettier/prettier */

import { IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  cpf: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
