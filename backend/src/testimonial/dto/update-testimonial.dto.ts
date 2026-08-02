import { IsEnum } from 'class-validator';
import { TestimonialStatus } from '../entities/testimonial.entity';

export class UpdateTestimonialDto {
  @IsEnum(TestimonialStatus)
  status!: TestimonialStatus;
}
