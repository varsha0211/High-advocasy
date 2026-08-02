import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateTestimonialDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(5, 320)
  email!: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 150)
  company!: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 2000)
  content!: string;

  @IsInt()
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  rating!: number;

  @IsOptional()
  @IsUrl()
  @Length(1, 500)
  photoUrl?: string;
}
