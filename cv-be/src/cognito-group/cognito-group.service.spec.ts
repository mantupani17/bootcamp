import { Test, TestingModule } from '@nestjs/testing';
import { CognitoGroupService } from './cognito-group.service';

describe('CognitoGroupService', () => {
  let service: CognitoGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CognitoGroupService],
    }).compile();

    service = module.get<CognitoGroupService>(CognitoGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
