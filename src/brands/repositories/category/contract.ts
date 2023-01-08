import { CategoryModel } from "../../models";
import { RepositoryContract } from "@squareboat/nestjs-objection";

export interface CategoryRepositoryContract extends RepositoryContract<CategoryModel> { }