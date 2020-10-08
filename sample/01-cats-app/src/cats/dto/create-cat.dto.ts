import { IsInt, IsString } from 'class-validator';
import {CatHouse} from "./cat-house.dto";

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;

  readonly house: CatHouse;
}
