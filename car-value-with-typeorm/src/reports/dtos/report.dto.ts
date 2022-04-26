import { Expose, Transform, Type } from "class-transformer";
import { ValidateNested } from "class-validator";

class User {
  @Expose()
  id: number;

  @Expose()
  email: string;
}

export class ReportDto {
    @Expose()
    id: number;

    @Expose()
    approved: boolean;

    @Expose()
    make: string;

    @Expose()
    model: string;

    @Expose()
    year: number;

    @Expose()
    mileage: number;

    @Expose()
    longitude: number;

    @Expose()
    latitude: number;

    @Expose()
    price: number;

    @Expose()
    userId: number;

    @Expose()
    approverId: number;

    @Transform(({ obj }) => obj.__owner__?.email)
    @Expose()
    ownerEmail: string

    // @Transform(({ obj }) => obj.__owner__)
    // @ValidateNested({ each: true })
    @Type(() => User)
    @Expose()
    __owner__: User

    @Type(() => User)
    @Expose()
    __approver__: User
}