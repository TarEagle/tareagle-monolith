import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CarbonFootprintForm } from './schemas/carbon-footprint-form.schema';
import { Model } from 'mongoose';

@Injectable()
export class CarbonFootprintFormRepository {
  constructor(
    @InjectModel(CarbonFootprintForm.name)
    private readonly carbonFootprintFormModel: Model<CarbonFootprintForm>,
  ) {}

  async findAll(): Promise<CarbonFootprintForm[]> {
    return this.carbonFootprintFormModel.find().exec();
  }

  async findOne(id: string): Promise<CarbonFootprintForm> {
    return this.carbonFootprintFormModel.findById(id).exec();
  }

  async findByPodcastId(id: string): Promise<any> {
    return this.carbonFootprintFormModel.find({ podcast: id }).exec();
  }

  async save(
    carbonFootprintFormData: Partial<CarbonFootprintForm>,
  ): Promise<CarbonFootprintForm> {
    const newCarbonFootprintFormData = new this.carbonFootprintFormModel(
      carbonFootprintFormData,
    );
    return newCarbonFootprintFormData.save();
  }
}
