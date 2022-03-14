import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private readonly powerService: PowerService) {

    }

    getData() {
        const power = 20;
        const powerMessage = this.powerService.supplyPower(power);
        return `Drawing ${power} watts of power from Power Service: ${powerMessage}`
    }
}
