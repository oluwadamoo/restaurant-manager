import { Controller, Post, Get, Body, HttpCode, HttpStatus, Patch, UseGuards, Param, ParseIntPipe } from '@nestjs/common';
import { GetUser } from './decorator';
import { SignInDto, SignUpDto } from './dto';
import { JwtGuard } from './guard/jwt.guard';
import { UserModel } from './models';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post("signup")
    async signup(@Body() dto: SignUpDto) {
        return this.userService.signup(dto)
    }

    @HttpCode(HttpStatus.OK)
    @Post("signin")
    async signin(@Body() dto: SignInDto) {
        return this.userService.signin(dto)
    }


    @UseGuards(JwtGuard)
    @Patch("make-admin/:id")
    async makeAdmin(@GetUser('role_id') userRoleId: number | null,
        @Param("id", ParseIntPipe) editedUserId: number
    ) {
        return this.userService.makeAdmin(userRoleId, editedUserId)
    }

}
