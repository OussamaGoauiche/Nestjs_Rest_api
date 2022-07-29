import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/* eslint-disable prettier/prettier */
export class PostModel {
  @ApiPropertyOptional({ type: Number })
  id?: number;
  @ApiProperty({ type: String, format: 'date-time' })
  date: Date;
  @ApiProperty({ type: String })
  title: string;
  @ApiProperty({ type: String })
  body: string;
  @ApiProperty({ type: String })
  category: string;
}