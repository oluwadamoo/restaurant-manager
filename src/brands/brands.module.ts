import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { AddonsController } from './brands.controller';
import { BrandModuleConstants } from './constants';
import { AddonRepository, CategoryRepository } from './repositories';
import { BrandRepository } from './repositories/brands/database';

@Module({
  providers: [BrandsService, { provide: BrandModuleConstants.addonRepo, useClass: AddonRepository },
    { provide: BrandModuleConstants.categoryRepo, useClass: CategoryRepository },
    { provide: BrandModuleConstants.brandRepo, useClass: BrandRepository },
  ],
  controllers: [AddonsController]
})
export class AddonsModule { }
