import { BaseModel } from "@squareboat/nestjs-objection";

export class BrandModel extends BaseModel {
    static tableName = "brands"
    // role: string
    brand_name: string
    user_id: number
}