import { Module } from '@nestjs/common';
import { UserEntityService } from './user.entity.service';

@Module({
  providers: [UserEntityService]
})
export class UserEntityModule {}
