import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
import { runparamDto } from './dtos/runparams.dto';

@Controller('computer')
export class ComputerController {
    constructor(private cpuService: CpuService, private readonly diskService: DiskService) {

    }

    @Get()
    run(@Query('a', ParseIntPipe) a: number, @Query('b', ParseIntPipe) b: number) {
    // run(@Query() query: runparamDto) {
        const cpuUsage = this.cpuService.compute(a, b)
        const diskUsage = this.diskService.getData()
        return {
            computerUsage: {
                cpuUsage: cpuUsage,
                diskUsage: diskUsage
            }
        }
    }
}
