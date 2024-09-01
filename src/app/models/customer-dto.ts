import {BankAccountDTO} from "./bank-account-dto";

export interface CustomerDTO {
  id: number;
  name: string;
  accounts: BankAccountDTO[];
}
