import { BrandModel } from "../../models";
import { RepositoryContract } from "@squareboat/nestjs-objection";

export interface BrandRepositoryContract extends RepositoryContract<BrandModel> { }