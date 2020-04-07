import { ClientViewModelDS } from "~/app/interface-adapters/controller/checkClientLoan/ClientViewModelDS";

export interface CheckClientLoanView {
  onCheckClientLoan(passedTest: boolean): void;
  setMessage(message: string): void;
  enableLoading(showLoading: boolean): void;
  enableButton(enable: boolean): void;
  restartViewModel(): void;
  hideKeyboard(): void;
}