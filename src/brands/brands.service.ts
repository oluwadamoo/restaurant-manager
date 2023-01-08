import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BrandModuleConstants } from './constants';
import { AddonDto, BrandDto, CategoryDto } from './dto';
import { AddonRepositoryContract, BrandRepositoryContract, CategoryRepositoryContract } from './repositories';

@Injectable()
export class BrandsService {
    constructor(
        @Inject(BrandModuleConstants.brandRepo) private brands: BrandRepositoryContract,
        @Inject(BrandModuleConstants.addonRepo) private addons: AddonRepositoryContract,
        @Inject(BrandModuleConstants.categoryRepo) private categories: CategoryRepositoryContract,
    ) { }

    async createBrand(userId: number, dto: BrandDto) {
        try {
            const brand = await this.brands.create({
                brand_name: dto.brand_name,
                user_id: userId
            })
            return { message: "Brand created", data: brand }
        } catch (error) {
            throw error
        }
    }

    async getAllBrands() {
        try {
            const brands = await this.brands.all()
            return brands
        } catch (error) {
            throw error
        }
    }

    async getBrandsById(brandId: number) {
        try {
            const brand = await this.brands.firstWhere({
                id: brandId
            })

            return brand
        } catch (error) {
            if (error.name === "ModelNotFound") {
                throw new NotFoundException("Brand not found!")
            }
            throw error
        }
    }

    async createMealAddon(brandId: number, dto: AddonDto) {
        try {


            await this.brands.firstWhere({
                id: brandId
            })

            const addon = await this.addons.create({
                name: dto.name,
                description: dto.description,
                price: dto.price,
                category: dto.category,
                brand_id: brandId
            })


            return addon
        } catch (error) {
            console.log(error)

            if (error.name === "ModelNotFound") {
                throw new NotFoundException("Brand not found!")
            }
            throw error
        }
    }


    async getAllMealAddonsByBrandId(brandId: number) {
        try {

            const mealAddons = await this.addons.getWhere({
                brand_id: brandId
            })

            return mealAddons
        } catch (error) {
            if (error.name === "ModelNotFound") {
                throw new NotFoundException("No Meal Addons found!")
            }

            throw error
        }
    }

    async getMealAddonById(brandId: number, addonId: number) {
        try {
            const mealAddon = await this.addons.firstWhere({ id: addonId, brand_id: brandId })
            return mealAddon
        } catch (error) {
            if (error.name === "ModelNotFound") {
                throw new NotFoundException("Addon does not exist!")
            }

            throw error
        }
    }

    async updateMealAddonById(brandId: number, addonId: number, dto: AddonDto) {
        try {
            await this.addons.updateWhere({ id: addonId, brand_id: brandId }, {
                name: dto.name,
                description: dto.description,
                category: dto.category,
                price: dto.price
            })
            return this.getMealAddonById(brandId, addonId)
        } catch (error) {
            if (error.name === "ModelNotFound") {
                throw new NotFoundException("Addon does not exist!")
            }

            throw error

        }
    }

    async deleteMealAddonById(brandId: number, addonId: number) {
        try {
            const mealAddon = await this.addons.firstWhere({ id: addonId, brand_id: brandId })
            await this.addons.delete(mealAddon)

            return { message: "Addon deleted!" }

        } catch (error) {
            if (error.name === "ModelNotFound") {
                throw new NotFoundException("Addon does not exist!")
            }

        }
    }
    async createMealAddonCategory(brandId: number, dto: CategoryDto) {
        try {
            const category = await this.categories.create({
                name: dto.name,
                brand_id: brandId

            })

            return category
        } catch (error) {
            if (error.name === "UniqueViolationError") {
                throw new BadRequestException("Category exists")
            }

            throw error
        }
    }
}

