import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {DatabaseModule} from "@app/common";
import {UserDocument, UserSchema} from "@app/common/models/user.schema";
import {UsersRepository} from "./users.repository.service";
import {JwtAuthGuard} from "../guards/jwt-auth.guard";

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
