import { Module } from '@nestjs/common';
import { CarbonFootprintFormService } from './carbon-footprint-form.service';
import { CarbonFootprintFormController } from './carbon-footprint-form.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CarbonFootprintForm,
  CarbonFootprintFormSchema,
} from './schemas/carbon-footprint-form.schema';
import { CarbonFootprintFormRepository } from './carbon-footprint-form.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CarbonFootprintForm.name, schema: CarbonFootprintFormSchema },
    ]),
  ],
  controllers: [CarbonFootprintFormController],
  providers: [CarbonFootprintFormService, CarbonFootprintFormRepository],
})
export class CarbonFootprintFormModule {}
