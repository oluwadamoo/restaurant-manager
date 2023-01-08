import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModuleConstants } from './constants';
import { UserRepository } from './repositories/user/database';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';


@Module({
    controllers: [UsersController],
    providers: [
        UsersService,
        {
            provide:
                UsersModuleConstants.userRepo,
            useClass: UserRepository
        },
        JwtStrategy
    ],
    imports: [JwtModule.register({

    })]

})
export class UsersModule {

}
