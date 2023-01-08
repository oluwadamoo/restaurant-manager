import { AddonModel } from "../../models";
import { RepositoryContract } from "@squareboat/nestjs-objection";

export interface AddonRepositoryContract extends RepositoryContract<AddonModel> { }