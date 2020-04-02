import { CheckClientLoanOutputBoundary } from "~/app/domain/use-cases/check-client-loan/CheckClientLoanOutputBoundary";
import { CheckClientLoanView } from "./CheckClientLoanView";


export class CheckClientLoanPresenterImpl implements CheckClientLoanOutputBoundary {
  checkClientLoanView: CheckClientLoanView;
  constructor(checkClientLoanView: CheckClientLoanView) {
    this.checkClientLoanView = checkClientLoanView;
  }

  onCheck(passedTest: boolean): void {
    console.log('passedTest Presenter: ', passedTest);
    this.checkClientLoanView.onCheckClientLoan(passedTest);
  }

}