import { BadRequestException, ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { SignInDto, SignUpDto } from './dto';
import * as argon from 'argon2'
import { UsersModuleConstants } from './constants';
import { UserRepositoryContract } from './repositories';

@Injectable()
export class UsersService {
    constructor(@Inject(UsersModuleConstants.userRepo) private users: UserRepositoryContract, private config: ConfigService, private jwt: JwtService) { }

    async signup(dto: SignUpDto) {

        const password = await argon.hash(dto.password)

        try {
            // save the user to the db
            const user = await this.users.create({
                email: dto.email,
                password,
                username: dto.username
            })

            delete user.password
            return this.signToken(user.id, user.email, user.role_id)
        } catch (error) {
            if (error.name === "UniqueViolationError") {
                throw new BadRequestException("Email in use")
            }
            throw error
        }
    }

    async signin(dto: SignInDto) {

        try {

            // find user by email
            const user = await this.users.firstWhere({
                email: dto.email
            })

            // Compare password
            const passwordMatches = await argon.verify(user.password, dto.password)

            // If password incorrect throw exception
            if (!passwordMatches) throw new NotFoundException("User not found")

            // send back the user
            return this.signToken(user.id, user.email, user.role_id)
        } catch (error) {
            console.log(error.name)
            if (error.name === "ModelNotFound") {
                throw new NotFoundException("User not found!")
            }
            throw error
        }

    }


    async makeAdmin(userRoleId: number, editedUserId: number) {
        try {
            const updatedUser = await this.users.firstWhere({
                id: editedUserId
            })

            await this.users.update(updatedUser, {
                role_id: 6
            })

            return { message: "User updated!" }


        } catch (error) {
            if (error.name === "ModelNotFound") {
                throw new NotFoundException("User not found!")
            }
            throw error
        }

    }


    async signToken(userId: number, email: string, role_id: number | null): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email,
            role_id
        }
        const secret = this.config.get("JWT_SECRET")
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '1h',
            secret: secret
        })



        return {
            access_token: token
        }
    }
}
