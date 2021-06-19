import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController, ProductsService, ProductsModule } from '@test/products';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
