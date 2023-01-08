import { Injectable } from "@nestjs/common";
import { DatabaseRepository, InjectModel } from "@squareboat/nestjs-objection";
import { UserModel } from "../../models";
import { UserRepositoryContract } from "./contract";

@Injectable()
export class UserRepository
    extends DatabaseRepository<UserModel>
    implements UserRepositoryContract {
    @InjectModel(UserModel)
    model: UserModel;
}