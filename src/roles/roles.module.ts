import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RoleModuleConstants } from './constants';
import { RoleRepository } from './repositories';

@Module({
  providers: [RolesService, { provide: RoleModuleConstants.roleRepo, useClass: RoleRepository }],
  controllers: [RolesController],

})
export class RolesModule { }
