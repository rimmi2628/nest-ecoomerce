import { IsEmail, IsNotEmpty,IsAlphanumeric } from 'class-validator';

export class UserDto{
_id:string
    name:string;
    @IsEmail()
    email:string;

    @IsNotEmpty() @IsAlphanumeric()
    password:string;
    roles: string[];
}