import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntityModule } from './users/user.entity/user.entity.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'seu-usuario',
      password: 'sua-senha',
      database: 'nome-do-banco-de-dados',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserEntityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
