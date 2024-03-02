import { Module } from '@nestjs/common';
import { CognitoGroupController } from './cognito-group.controller';
import { CognitoGroupService } from './cognito-group.service';

@Module({
  controllers: [CognitoGroupController],
  providers: [CognitoGroupService]
})
export class CognitoGroupModule {}
