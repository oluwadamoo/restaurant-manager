import { BaseModel } from "@squareboat/nestjs-objection";

export class RoleModel extends BaseModel {
    static tableName = "roles"
    role: string

}