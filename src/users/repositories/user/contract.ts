import { UserModel } from "../../models";
import { RepositoryContract } from "@squareboat/nestjs-objection";

export interface UserRepositoryContract extends RepositoryContract<UserModel> { }