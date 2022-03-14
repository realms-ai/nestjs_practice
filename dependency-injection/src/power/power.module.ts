import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

// User of `exports` to export service to other modules
@Module({
  providers: [PowerService],
  exports: [PowerService]
})
export class PowerModule {}
