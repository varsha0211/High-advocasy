import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { Repository } from 'typeorm';
import { Testimonial, TestimonialStatus } from './entities/testimonial.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TestimonialService {
  constructor(
    @InjectRepository(Testimonial)
    private readonly testimonialRepo: Repository<Testimonial>,
  ) {}

  async create(dto: CreateTestimonialDto): Promise<Testimonial> {
    const testimonial = this.testimonialRepo.create({
      name: dto.name,
      email: dto.email,
      company: dto.company,
      content: dto.content,
      rating: dto.rating,
      status: TestimonialStatus.PENDING,
    });
    return this.testimonialRepo.save(testimonial);
  }

  async findAll(status?: TestimonialStatus): Promise<Testimonial[]> {
    const testimonials = this.testimonialRepo.find({
      where: status ? { status } : {},
      order: {
        createdAt: 'DESC',
      },
    });
    return testimonials;
  }

  async update(id: string, dto: UpdateTestimonialDto): Promise<Testimonial> {
    const testimonial = await this.testimonialRepo.findOne({
      where: { id },
    });

    if (!testimonial) {
      throw new NotFoundException('Testimonial not found');
    }
    testimonial.status = dto.status;
    return this.testimonialRepo.save(testimonial);
  }
}
