import { BaseModel } from "@squareboat/nestjs-objection";

export class UserModel extends BaseModel {
    static tableName = "users"
    email: string;
    password: string;
    username: string;
    role_id: number

}