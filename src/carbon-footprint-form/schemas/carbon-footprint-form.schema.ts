import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PodDocument = HydratedDocument<CarbonFootprintForm>;

@Schema({
  timestamps: true,
})
export class CarbonFootprintForm {
  @Prop({ required: true })
  numOfLightBulbs: string;

  @Prop({ required: true })
  lightBulbType: string;

  @Prop({ required: true })
  numOfTelevisions: string;

  @Prop({ required: true })
  numOfRefrigerators: string;

  @Prop({ required: true })
  heatingSystemsCount: string;

  @Prop({ required: true })
  smallAppliancesCount: string;

  @Prop({ required: true })
  transportationType: string;

  @Prop({ required: true })
  dailyKMDistance: string;

  @Prop({ required: true })
  flightFrequencyYearly: string;

  @Prop()
  mail: string;

  @Prop()
  carbonFootprint: number;

  @Prop()
  carbonFootprintLevel: string;
}

export const CarbonFootprintFormSchema =
  SchemaFactory.createForClass(CarbonFootprintForm);
