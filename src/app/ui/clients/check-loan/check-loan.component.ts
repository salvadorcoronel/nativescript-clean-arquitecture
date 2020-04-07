import { Component, OnInit } from '@angular/core';
import { CheckClientLoanView } from '~/app/interface-adapters/presenter/CheckClientLoanView';
import { CheckClientLoanControllerImpl } from '~/app/interface-adapters/controller/CheckClientLoanControllerImpl';
import { ClientViewModelDS } from '~/app/interface-adapters/controller/checkClientLoan/ClientViewModelDS';
import { Page } from 'tns-core-modules/ui/page/page';
import { KeyboardFactory } from '~/app/libs/keyboard/keyboard.factory';

const CLASES_MESSAGE_SLIDEINUP = 'message animate-slideInUp-delay-0ms';
const CLASES_MESSAGE_SLIDEOUTDOWN = 'message animate-slideOutDown-delay-0ms';

// CheckClientLoanViewImpl
@Component({
  selector: 'ns-check-loan',
  templateUrl: './check-loan.component.html',
  styleUrls: ['./check-loan.component.scss']
})
export class CheckLoanComponent implements OnInit, CheckClientLoanView {
  isEnableButton: boolean = false;
  showLoading: boolean = false;
  message: string = '';
  descriptionLabel: string = 'This form allows to validate if an user is enabled to receive a loan based on their credit score.';
  messageClasses: string = CLASES_MESSAGE_SLIDEINUP;

  passedTest: boolean = false;
  clientViewModel: ClientViewModelDS = this.initViewModel();

  constructor(private checkClientLoanController: CheckClientLoanControllerImpl,
    private _page: Page) {
    this.checkClientLoanController.startConfig(this);
    this.restartViewModel();
  }

  ngOnInit(): void {

  }

  checkClientLoan(): void {
    this.enableLoading(true);
    this.enableButton(false);
    this.checkClientLoanController.check(this.clientViewModel);
  }

  onCheckClientLoan(passedTest: boolean): void {
    this.passedTest = passedTest;
  }

  enableButton(enable: boolean): void {
    this.isEnableButton = enable;
  }

  enableLoading(show: boolean): void {
    this.showLoading = show;
  }

  setMessage(message: string): void {
    this.message = message;
    this.setMessageClasses(CLASES_MESSAGE_SLIDEINUP);
    this.hideMessage();
  }

  hideMessage(): void {
    setTimeout(() => {
      this.setMessageClasses(CLASES_MESSAGE_SLIDEOUTDOWN);
    }, 2000);
  }

  setMessageClasses(classes: string): void {
    this.messageClasses = classes;
  }

  restartViewModel(): void {
    this.clientViewModel = this.initViewModel();
  }

  initViewModel(): ClientViewModelDS {
    return {
      firstName: '',
      lastName: '',
      dni: '',
    };
  }

  onTextChangeValidate(): void {
    setTimeout(() => {
      this.checkClientLoanController.validate(this.clientViewModel);
    }, 100);
  }

  hideKeyboard() {
    KeyboardFactory.getInstance().hide(this._page);
  }

}
