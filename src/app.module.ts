import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './user/users.controller';
import { ProductsController } from './products/products.controller';
import { UsersService } from './user/users.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, ProductsController],
  providers: [AppService, UsersService],
})
export class AppModule {}
