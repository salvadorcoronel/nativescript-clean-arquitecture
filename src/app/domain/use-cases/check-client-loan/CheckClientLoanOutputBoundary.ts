export interface CheckClientLoanOutputBoundary {
  onCheck(passedTest: boolean): void;
  onValidate(isValidated: boolean): void;
}