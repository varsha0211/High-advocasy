import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Res,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { TestimonialService } from './testimonial.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { TestimonialStatus } from './entities/testimonial.entity';

@Controller('testimonial')
export class TestimonialController {
  constructor(private readonly testimonialService: TestimonialService) {}

  @Post()
  async create(@Res() res, @Body() dto: CreateTestimonialDto) {
    const result = await this.testimonialService.create(dto);
    res.status(HttpStatus.OK).json({
      status: true,
      message: 'Testimonial added successfully',
      result,
    });
  }

  @Get()
  async findAll(@Res() res, @Query('status') status: TestimonialStatus) {
    const result = await this.testimonialService.findAll(status);
    res.status(HttpStatus.OK).json({
      status: true,
      message: 'All Testimonial fetched successfully',
      result,
    });
  }

  @Patch('status/:id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() updateTestimonialDto: UpdateTestimonialDto,
  ) {
    const result = await this.testimonialService.update(
      id,
      updateTestimonialDto,
    );
    res.status(HttpStatus.OK).json({
      status: true,
      message: 'Testimonial status updated successfully',
      result,
    });
  }
}
