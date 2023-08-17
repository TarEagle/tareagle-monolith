import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PodDocument = HydratedDocument<CarbonFootprintForm>;

@Schema({
  timestamps: true,
})
export class CarbonFootprintForm {
  @Prop({ required: true })
  numOfLightBulbs: number;

  @Prop({ required: true })
  lightBulbType: string;

  @Prop({ required: true })
  numOfTelevisions: number;

  @Prop({ required: true })
  numOfRefrigerators: number;

  @Prop({ required: true })
  heatingSystemsCount: number;

  @Prop({ required: true })
  smallAppliancesCount: number;

  @Prop({ required: true })
  transportationType: string;

  @Prop({ required: true })
  dailyKMDistance: number;

  @Prop({ required: true })
  flightFrequencyYearly: number;

  @Prop()
  mail: string;

  @Prop({ required: true })
  carbonFootprint: number;

  @Prop({ required: true })
  carbonFootprintLevel: string;
}

export const CarbonFootprintFormSchema =
  SchemaFactory.createForClass(CarbonFootprintForm);
