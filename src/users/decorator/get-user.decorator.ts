import { createParamDecorator, ExecutionContext, UnauthorizedException } from "@nestjs/common";

export const GetUser = createParamDecorator(
    (data: string | undefined, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest()

        if (data == "role_id" && request.user[data] !== 6) {
            throw new UnauthorizedException("You need to be an admin to access this resource")
        }

        if (data) {
            return request.user[data]
        }
        return request.user
    }
)