import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/users/decorator';
import { JwtGuard } from 'src/users/guard/jwt.guard';
import { RoleDto } from './dto';
import { RolesService } from './roles.service';

@UseGuards(JwtGuard)
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) { }

    @Post()
    createRole(@GetUser("id") userId: number, @Body() dto: RoleDto) {
        return this.roleService.createRole(userId, dto)
    }
}
