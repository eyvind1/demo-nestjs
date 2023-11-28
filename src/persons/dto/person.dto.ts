import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreatePersonDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    name: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    address: string;
    @IsString()
    @IsNotEmpty()
    role: string;
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(100)
    age: number
}

export class UpdatePersonDTO {
    @IsString()
    @MinLength(3)
    @MaxLength(10)
    @IsOptional()
    name?: string;

    @IsString()
    @MinLength(3)
    @MaxLength(10)
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    role?: string;
    
    @IsNumber()
    @IsOptional()
    @Min(1)
    @Max(100)
    age?: number
}