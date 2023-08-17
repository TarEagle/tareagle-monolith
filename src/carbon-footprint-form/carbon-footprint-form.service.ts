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

    score += this.calculateLightBulbsScore(data.numOfLightBulbs);
    score += this.calculateBulbTypeScore(data.lightBulbType);
    score += this.calculateTelevisionScore(data.numOfTelevisions);
    score += this.calculateRefrigeratorScore(data.numOfRefrigerators);
    score += this.calculateHeatingSystemScore(data.heatingSystemsCount);
    score += this.calculateSmallApplianceScore(data.smallAppliancesCount);
    score += this.calculateTransportationScore(data.transportationType);
    score += this.calculateDailyDistanceScore(data.dailyKMDistance);
    score += this.calculateFlightFrequencyScore(data.flightFrequencyYearly);
    data.carbonFootprintLevel = this.determinePollutionLevel(score);
    data.carbonFootprint = score;
  }

  private calculateLightBulbsScore(num: number): number {
    if (num < 10) return 1;
    if (num <= 20) return 2;
    return 3;
  }

  private calculateBulbTypeScore(type: string): number {
    return type.toLowerCase() === 'LED' ? 1 : 2;
  }

  private calculateTelevisionScore(num: number): number {
    if (num === 1) return 1;
    if (num === 2) return 2;
    return 3;
  }

  private calculateRefrigeratorScore(num: number): number {
    if (num === 1) return 1;
    if (num === 2) return 2;
    return 3;
  }

  private calculateHeatingSystemScore(num: number): number {
    if (num === 0) return 1;
    if (num === 1) return 2;
    return 3;
  }

  private calculateSmallApplianceScore(num: number): number {
    if (num < 3) return 1;
    if (num <= 5) return 2;
    return 3;
  }

  private calculateTransportationScore(type: string): number {
    switch (type.toLowerCase()) {
      case 'PIE':
      case 'BICI':
        return 1;
      case 'TRASNPORTE_PUBLICO':
      case 'BUS':
        return 2;
      case 'VEHICULO_PROPIO_ELECTRICO':
        return 3;
      case 'VEHICULO_PROPIO_DIESEL':
        return 4;
      default:
        return 0;
    }
  }

  private calculateDailyDistanceScore(km: number): number {
    if (km < 5) return 1;
    if (km <= 20) return 2;
    if (km <= 50) return 3;
    return 4;
  }

  private calculateFlightFrequencyScore(num: number): number {
    if (num === 0) return 1;
    if (num <= 2) return 2;
    if (num <= 5) return 3;
    return 4;
  }

  private determinePollutionLevel(score: number): string {
    if (score <= 10) return 'Bajo';
    if (score <= 20) return 'Moderado';
    if (score <= 30) return 'Medio';
    if (score <= 40) return 'Alto';
    return 'Excedido';
  }
}
