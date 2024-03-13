import { AmountRepresentation } from "./amount-representation.model";

export class UserDashboardRepresentation {
    public amountsList: Set<AmountRepresentation>;
    public totalIncome: string;
    public totalExpense: string;
    public displayMonth: number;
}