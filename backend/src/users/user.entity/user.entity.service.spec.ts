import { Test, TestingModule } from '@nestjs/testing';
import { UserEntityService } from './user.entity.service';

describe('UserEntityService', () => {
  let service: UserEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEntityService],
    }).compile();

    service = module.get<UserEntityService>(UserEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
