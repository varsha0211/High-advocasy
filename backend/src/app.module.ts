import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from './database/typeorm.module';
import { TestimonialModule } from './testimonial/testimonial.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule,
    TestimonialModule,
  ],
})
export class AppModule {}
