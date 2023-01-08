import { IsNotEmpty, IsString } from "class-validator"

export class RoleDto {

    @IsString()
    @IsNotEmpty()
    role: string
}