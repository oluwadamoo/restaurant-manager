import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/users/decorator';
import { JwtGuard } from 'src/users/guard/jwt.guard';
import { BrandsService } from './brands.service';
import { AddonDto, BrandDto, CategoryDto } from './dto';

@UseGuards(JwtGuard)
@Controller('brands')
export class AddonsController {
    constructor(private brandService: BrandsService) { }

    @Post()
    async createBrand(@GetUser("id") userId: number, @Body() dto: BrandDto) {
        return this.brandService.createBrand(userId, dto)
    }

    @Get()
    async getAllBrands() {
        return this.brandService.getAllBrands()
    }

    @Get(":brandId")
    async getBrandsById(@Param("brandId", ParseIntPipe) brandId: number) {
        return this.brandService.getBrandsById(brandId)
    }

    @Post(":brandId/addons")
    async createMealAddon(
        @GetUser('role_id') userRoleId: number | null,
        @Param("brandId", ParseIntPipe) brandId: number,
        @Body() dto: AddonDto
    ) {

        return this.brandService.createMealAddon(brandId, dto)
    }

    @Get(":brandId/addons")
    async getAllMealAddons(@GetUser('role_id') userRoleId: number | null,
        @Param("brandId", ParseIntPipe) brandId: number) {
        return this.brandService.getAllMealAddonsByBrandId(brandId)
    }

    @Get(":brandId/addons/:addonId")
    async getMealAddonById(@GetUser('role_id') userRoleId: number | null, @Param("brandId", ParseIntPipe) brandId: number, @Param("addonId", ParseIntPipe) addonId: number) {
        return this.brandService.getMealAddonById(brandId, addonId)
    }
    @Patch(":brandId/addons/:addonId")
    async updateMealAddonById(@GetUser('role_id') userRoleId: number | null, @Param("brandId", ParseIntPipe) brandId: number, @Param("addonId", ParseIntPipe) addonId: number, @Body() dto: AddonDto
    ) {
        return this.brandService.updateMealAddonById(brandId, addonId, dto)
    }

    @Delete(":brandId/addons/:addonId")
    async deleteMealAddonById(@GetUser('role_id') userRoleId: number | null, @Param("brandId", ParseIntPipe) brandId: number, @Param("addonId", ParseIntPipe) addonId: number) {
        return this.brandService.deleteMealAddonById(brandId, addonId)
    }
    @Post(":brandId/addon-categories")
    async createMealAddonCategory(@GetUser('role_id') userRoleId: number | null, @Param("brandId", ParseIntPipe) brandId: number, @Body() dto: CategoryDto) {
        return this.brandService.createMealAddonCategory(brandId, dto)
    }
}
