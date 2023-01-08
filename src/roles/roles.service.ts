import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RoleModuleConstants } from './constants';
import { RoleDto } from './dto';
import { RoleRepository } from './repositories';

@Injectable()
export class RolesService {
    constructor(@Inject(RoleModuleConstants.roleRepo) private roles: RoleRepository, private config: ConfigService) { }

    async getRoles() {

    }

    async createRole(userId: number, dto: RoleDto) {
        try {

            const role = await this.roles.create({
                role: dto.role
            })
            return { role: role }
        } catch (error) {
            console.log(error.name)
        }

    }
}
