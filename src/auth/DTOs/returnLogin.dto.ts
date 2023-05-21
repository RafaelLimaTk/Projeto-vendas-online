/* eslint-disable prettier/prettier */
import { ReturnUserDto } from 'src/user/DTOs/returnUser.dto';

export interface ReturnLogin {
  user: ReturnUserDto;
  accessToken: string;
}
