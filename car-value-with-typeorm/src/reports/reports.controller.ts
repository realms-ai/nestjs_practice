import { Body, ClassSerializerInterceptor, Controller, Get, Param, Patch, Post, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { AdminGuard } from 'src/guards/admin.guard';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { CurrentUserInterceptor } from 'src/users/interceptors/current-user.interceptor';
import { User } from 'src/users/user.entity';
import { ApprovedReportDto } from './dtos/approved-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { ReportDto } from './dtos/report.dto';
import { ReportsService } from './reports.service';

@Serialize(ReportDto)
@Controller('reports')
export class ReportsController {
  constructor(
    private reportsServices: ReportsService
  ){}

  @Get()
  // @UseInterceptors(ClassSerializerInterceptor)
  // @Serialize(ReportDto)
  index(@Query() query: GetEstimateDto) {
    console.log("Query: ", Object.keys(query).length)
    if(Object.keys(query).length > 0)
      return this.reportsServices.search(query)
    else
      return this.reportsServices.find()
  }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() body: CreateReportDto, @CurrentUser() user:  User) {
    return this.reportsServices.create(body, user)
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  update(@Param('id') id: string, @Body() body: ApprovedReportDto, @CurrentUser() user:  User) {
    console.log("Body: ", body)
    return this.reportsServices.update(+id, body, user)
  }
}
