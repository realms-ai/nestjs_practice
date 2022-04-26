import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService) {

    }

    compute(a: number, b: number) {
        const powerMessage = this.powerService.supplyPower(a+b);
        return `Drawing ${a+b} watts of power from Power Service: ${powerMessage}`;
    }
}
