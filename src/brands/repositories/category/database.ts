import { Injectable } from "@nestjs/common";
import { DatabaseRepository, InjectModel } from "@squareboat/nestjs-objection";
import { CategoryModel } from "../../models";
import { CategoryRepositoryContract } from "./contract";

@Injectable()
export class CategoryRepository
    extends DatabaseRepository<CategoryModel>
    implements CategoryRepositoryContract {
    @InjectModel(CategoryModel)
    model: CategoryModel;
}