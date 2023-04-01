import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { ApprovedReportDto } from './dtos/approved-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { Report } from './report.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report) private Report: Repository<Report>
  ){}

  async find() {
    console.log("I am in find method" )
    return this.Report.find(
    {
      join: {
        alias: 'report',
        leftJoinAndSelect: {
          owner: "report.owner"
        }
      }
    })
  }

  async search(query: GetEstimateDto) {
    console.log("I am in search method" )
    return this.Report.createQueryBuilder()
    // .select('*')
    .select('AVG(price)', 'price')
    .where("make = :make", { make: query.make })
    .andWhere("model = :model", { model: query.model })
    .andWhere("longitude - :longitude BETWEEN -5 AND 5", { longitude: query.longitude })
    .andWhere("latitude - :latitude BETWEEN -5 AND 5", { latitude: query.latitude })
    .andWhere("year - :year BETWEEN -3 AND 3", { year: query.year })
    .andWhere("approved IS TRUE")
    .orderBy("ABS(mileage - :mileage)", 'DESC')
    .setParameters({mileage: query.mileage})
    .limit(3)
    // .getRawMany()
    .getRawOne()
  }

  async create(body: CreateReportDto, user: User){
    const report = await this.Report.create()
    Object.assign(report, body)
    report.owner = Promise.resolve(user)
    await this.Report.save(report)
    console.log("Saving the reports")
    return report
  }

  async update(id: number, body: ApprovedReportDto, user: User){
    const report = await this.Report.findOne(id)
    if(!report)
      throw new NotFoundException('Report not found')
    Object.assign(report, body)
    report.approver = Promise.resolve(user)
    await this.Report.save(report)
    return report
  }
}