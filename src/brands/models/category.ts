import { BaseModel } from "@squareboat/nestjs-objection";

export class CategoryModel extends BaseModel {
    static tableName = "categories"
    name: string;
    brand_id: number;

}