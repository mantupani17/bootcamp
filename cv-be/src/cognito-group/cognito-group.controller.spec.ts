import { Test, TestingModule } from '@nestjs/testing';
import { CognitoGroupController } from './cognito-group.controller';

describe('CognitoGroupController', () => {
  let controller: CognitoGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CognitoGroupController],
    }).compile();

    controller = module.get<CognitoGroupController>(CognitoGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
