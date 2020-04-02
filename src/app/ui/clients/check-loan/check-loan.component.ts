import { Component, OnInit } from '@angular/core';
import { CheckClientLoanView } from '~/app/interface-adapters/presenter/CheckClientLoanView';
import { CheckClientLoanControllerImpl } from '~/app/interface-adapters/controller/CheckClientLoanControllerImpl';
import { ClientViewModelDS } from '~/app/interface-adapters/controller/checkClientLoan/ClientViewModelDS';

// CheckClientLoanViewImpl
@Component({
  selector: 'ns-check-loan',
  templateUrl: './check-loan.component.html',
  styleUrls: ['./check-loan.component.css']
})
export class CheckLoanComponent implements OnInit, CheckClientLoanView {

  clientViewModel: ClientViewModelDS = {
    firstName: "Salvador",
    lastName: "Coronel",
    dni: "46200966",
  };
  passedTest: boolean = false;

  constructor(private checkClientLoanController: CheckClientLoanControllerImpl) {
    this.checkClientLoanController.startConfig(this);
  }

  ngOnInit(): void {
  }

  checkClientLoan(): void {
    this.checkClientLoanController.check(this.clientViewModel);
  }

  onCheckClientLoan(passedTest: boolean): void {
    console.log('passedTest Component: ', passedTest);
    this.passedTest = passedTest;
  }

}
