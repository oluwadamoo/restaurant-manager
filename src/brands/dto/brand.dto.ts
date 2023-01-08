import { IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class BrandDto {

    @IsString()
    @IsNotEmpty()
    brand_name: string
}