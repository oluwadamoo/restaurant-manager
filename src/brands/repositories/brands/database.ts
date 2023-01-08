import { Injectable } from "@nestjs/common";
import { DatabaseRepository, InjectModel } from "@squareboat/nestjs-objection";
import { BrandModel } from "../../models";
import { BrandRepositoryContract } from "./contract";

@Injectable()
export class BrandRepository
    extends DatabaseRepository<BrandModel>
    implements BrandRepositoryContract {
    @InjectModel(BrandModel)
    model: BrandModel;
}