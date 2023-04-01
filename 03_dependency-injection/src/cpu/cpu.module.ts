import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { CpuService } from './cpu.service';

// Use of `imports` to import service of other modules
@Module({
  imports: [PowerModule],
  providers: [CpuService],
  exports: [CpuService]
})
export class CpuModule {}
