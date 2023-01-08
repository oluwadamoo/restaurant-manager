import { RoleModel } from "../../models";
import { RepositoryContract } from "@squareboat/nestjs-objection";

export interface RoleRepositoryContract extends RepositoryContract<RoleModel> { }