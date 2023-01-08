import { Injectable } from "@nestjs/common";
import { DatabaseRepository, InjectModel } from "@squareboat/nestjs-objection";
import { RoleModel } from "../../models";
import { RoleRepositoryContract } from "./contract";

@Injectable()
export class RoleRepository
    extends DatabaseRepository<RoleModel>
    implements RoleRepositoryContract {
    @InjectModel(RoleModel)
    model: RoleModel;
}