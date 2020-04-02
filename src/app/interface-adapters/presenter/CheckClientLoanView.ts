import { ClientViewModelDS } from "~/app/interface-adapters/controller/checkClientLoan/ClientViewModelDS";

export interface CheckClientLoanView {
  onCheckClientLoan(passedTest: boolean): void;
}