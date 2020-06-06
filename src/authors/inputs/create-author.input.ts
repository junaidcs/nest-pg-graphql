import { IsString, IsInt } from 'class-validator';

export class CreateAuthorInput {

  @IsInt()
  age: number;
  
  @IsString()
  name: string;
  
  @IsInt()
  rating: number;
}
