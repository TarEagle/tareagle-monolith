import { Controller, Get, Post, Body } from '@nestjs/common';
import { CarbonFootprintFormService } from './carbon-footprint-form.service';
import { CreateCarbonFootprintFormDto } from './dto/create-carbon-footprint-form.dto';

@Controller('carbon-footprint-form')
export class CarbonFootprintFormController {
  constructor(
    private readonly carbonFootprintFormService: CarbonFootprintFormService,
  ) {}

  @Post()
  create(@Body() createCarbonFootprintFormDto: CreateCarbonFootprintFormDto) {
    return this.carbonFootprintFormService.create(createCarbonFootprintFormDto);
  }

  @Get()
  findAll() {
    return this.carbonFootprintFormService.findAll();
  }
}
