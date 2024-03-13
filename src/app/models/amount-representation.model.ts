import { UUID } from "crypto";

export class AmountRepresentation {
    inputDate: Date;
    amount: number;
    sign: string;
    userId: UUID;
    currency: string;
}