import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class UpdateDto {
    @IsNotEmpty()

    email: string

}