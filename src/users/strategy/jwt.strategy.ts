import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersModuleConstants } from "../constants";
import { UserRepositoryContract } from "../repositories";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(@Inject(UsersModuleConstants.userRepo) private users: UserRepositoryContract, config: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get("JWT_SECRET")
        })
    }

    async validate(payload: { sub: number, email: string }) {
        const user = await this.users.firstWhere(
            { id: payload.sub }
        )
        delete user.password
        return user
        // console.log(payload, "PAYLOAD")
    }
}