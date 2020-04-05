import { CheckClientLoanOutputBoundary } from "~/app/domain/use-cases/check-client-loan/CheckClientLoanOutputBoundary";
import { CheckClientLoanView } from "./CheckClientLoanView";


export class CheckClientLoanPresenterImpl implements CheckClientLoanOutputBoundary {
  checkClientLoanView: CheckClientLoanView;
  constructor(checkClientLoanView: CheckClientLoanView) {
    this.checkClientLoanView = checkClientLoanView;
  }

  onCheck(passedTest: boolean): void {
    this.checkClientLoanView.onCheckClientLoan(passedTest);

    // sleep 2000
    setTimeout(() => {
      this.checkClientLoanView.enableLoading(false);
      this.checkClientLoanView.setMessage(passedTest ? 'Approved!' : 'Try again!');
      this.checkClientLoanView.enableButton(true);
      this.checkClientLoanView.restartViewModel();
    }, 500);
  }

  onValidate(isValidated: boolean): void {
    this.checkClientLoanView.enableButton(isValidated);
    if (isValidated)
      this.checkClientLoanView.dismissSoftKeybaord();
  }

}