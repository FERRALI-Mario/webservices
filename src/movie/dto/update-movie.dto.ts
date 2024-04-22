import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateMovieDto {
    @IsString()
    @IsNotEmpty()
    name?: string;
    @IsString()
    @IsNotEmpty()
    description?: string;
    @IsDate()
    @IsNotEmpty()
    date?: Date;
    @IsNumber()
    @IsNotEmpty()
    note?: number;
}
