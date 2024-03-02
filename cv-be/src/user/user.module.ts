import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schemas/user.schema';
import { CVS, CVSSchema } from '../schemas/cvs.schema';
import { AuthService } from '../auth/auth.service';
import { UserModel } from '../models/user.model';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: User.name, schema: UserSchema},
      {name: CVS.name, schema: CVSSchema}
    ], 'primary')
  ],
  controllers: [UserController],
  providers: [UserService, AuthService, UserModel]
})
export class UserModule {}
