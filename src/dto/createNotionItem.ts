import { IsNotEmpty, IsNumber, IsString } from "class-validator";

// dto created for that specify params are required
export class CreateDatabaseItem {
  @IsNotEmpty()
  Name: string;
  @IsNotEmpty()
  Content: string;
  @IsNotEmpty()
  @IsString()
  Published: string;
  @IsNotEmpty()
  @IsNumber()
  ReadingTime: number;
}
