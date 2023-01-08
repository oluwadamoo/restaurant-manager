import { IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class AddonDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsOptional()
    description?: string

    @IsNumber({ allowNaN: false, maxDecimalPlaces: 2 })
    @IsNotEmpty()
    price: number

    @IsString()
    @IsOptional()
    category?: string
}