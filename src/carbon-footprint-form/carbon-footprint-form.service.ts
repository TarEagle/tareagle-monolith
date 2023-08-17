import { Injectable } from '@nestjs/common';
import { CreateCarbonFootprintFormDto } from './dto/create-carbon-footprint-form.dto';
import { CarbonFootprintFormRepository } from './carbon-footprint-form.repository';

@Injectable()
export class CarbonFootprintFormService {
  constructor(
    private readonly carbonFootprintFormRepository: CarbonFootprintFormRepository,
  ) {}

  create(createCarbonFootprintFormDto: CreateCarbonFootprintFormDto) {
    this.calculateScore(createCarbonFootprintFormDto);
    return this.carbonFootprintFormRepository.save(
      createCarbonFootprintFormDto,
    );
  }

  findAll() {
    return this.carbonFootprintFormRepository.findAll();
  }

  calculateScore(data: CreateCarbonFootprintFormDto) {
    let score = 0;

    score += this.calculateLightBulbsScore(parseInt(data.numOfLightBulbs));
    score += this.calculateBulbTypeScore(parseInt(data.lightBulbType));
    score += this.calculateTelevisionScore(parseInt(data.numOfTelevisions));
    score += this.calculateRefrigeratorScore(parseInt(data.numOfRefrigerators));
    score += this.calculateHeatingSystemScore(
      parseInt(data.heatingSystemsCount),
    );
    score += this.calculateSmallApplianceScore(
      parseInt(data.smallAppliancesCount),
    );
    score += this.calculateTransportationScore(
      parseInt(data.transportationType),
    );
    score += this.calculateDailyDistanceScore(parseInt(data.dailyKMDistance));
    score += this.calculateFlightFrequencyScore(
      parseInt(data.flightFrequencyYearly),
    );
    data.carbonFootprint = score;
    data.carbonFootprintLevel = this.determinePollutionLevel(score);
  }

  private calculateLightBulbsScore(num: number): number {
    return num;
  }

  private calculateBulbTypeScore(type: number): number {
    return type;
  }

  private calculateTelevisionScore(num: number): number {
    return num;
  }

  private calculateRefrigeratorScore(num: number): number {
    return num;
  }

  private calculateHeatingSystemScore(num: number): number {
    return num;
  }

  private calculateSmallApplianceScore(num: number): number {
    return num;
  }

  private calculateTransportationScore(type: number): number {
    return type;
  }

  private calculateDailyDistanceScore(km: number): number {
    return km;
  }

  private calculateFlightFrequencyScore(num: number): number {
    return num;
  }

  private determinePollutionLevel(score: number): string {
    if (score <= 10) return 'Bajo';
    if (score <= 20) return 'Moderado';
    if (score <= 30) return 'Medio';
    if (score <= 40) return 'Alto';
    return 'Excedido';
  }
}
