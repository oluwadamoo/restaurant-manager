import { BaseModel } from "@squareboat/nestjs-objection";

export class AddonModel extends BaseModel {
    static tableName = "meal_addons"
    name: string;
    description: string;
    price: number;
    category: string;
    brand_id: number;

}