import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @ApiProperty({ description: 'Email do usuário', example: 'user@example.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Senha do usuário', minLength: 6 })
    @IsString()
    @MinLength(6)
    password: string;
}
