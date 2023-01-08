import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ObjectionModule } from '@squareboat/nestjs-objection';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AddonsModule } from './brands/brands.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ObjectionModule.register({
      isGlobal: true,
      default: "postgres",
      connections: {
        postgres: {
          client: "pg",
          debug: !!+process.env.DB_DEBUG,
          connection: {
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            charset: "utf8",
          },
        },
      },
    }),
    UsersModule,
    RolesModule,
    AddonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
