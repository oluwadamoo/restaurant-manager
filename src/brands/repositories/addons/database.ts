import { Injectable } from "@nestjs/common";
import { DatabaseRepository, InjectModel } from "@squareboat/nestjs-objection";
import { AddonModel } from "../../models";
import { AddonRepositoryContract } from "./contract";

@Injectable()
export class AddonRepository
    extends DatabaseRepository<AddonModel>
    implements AddonRepositoryContract {
    @InjectModel(AddonModel)
    model: AddonModel;
}