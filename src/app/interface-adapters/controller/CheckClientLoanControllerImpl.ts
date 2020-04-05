import { Injectable } from "@angular/core";
import { CheckClientLoanInputBoundary } from "~/app/domain/use-cases/check-client-loan/CheckClientLoanInputBoundary";
import { ClientCreditScoreDataAccessImpl } from "../gateway/clients/ClientCreditScoreDataAccessImpl";
import { ClientDataAccessImpl } from "../gateway/clients/ClientDataAccessImpl";
import { CheckClientLoanImpl } from "~/app/domain/use-cases/check-client-loan/CheckClientLoanImpl";
import { ClientViewModelDS } from "./checkClientLoan/ClientViewModelDS";
import { CheckClientLoanControllerMapper } from "./checkClientLoan/mapper/CheckClientLoanControllerMapper";
import { CheckClientLoanPresenterImpl } from "../presenter/CheckClientLoanPresenterImpl";
import { ClientInputControllerDS } from "~/app/domain/use-cases/check-client-loan/mapper/ClientInputControllerDS";
import { CheckClientLoanView } from "../presenter/CheckClientLoanView";

@Injectable()
export class CheckClientLoanControllerImpl {
  checkClientLoan: CheckClientLoanInputBoundary;
  constructor() { }

  startConfig(view: CheckClientLoanView): void {
    this.checkClientLoan = new CheckClientLoanImpl(
      new ClientCreditScoreDataAccessImpl(),
      new ClientDataAccessImpl(),
      new CheckClientLoanPresenterImpl(view)
    );
  }

  check(client: ClientViewModelDS): void {
    const clientInputControllerDS: ClientInputControllerDS = CheckClientLoanControllerMapper.transformClientViewModelDSToClientInputControllerDS(client);
    this.checkClientLoan.check(clientInputControllerDS);
  }

  validate(client: ClientViewModelDS): void {
    const clientInputControllerDS: ClientInputControllerDS = CheckClientLoanControllerMapper.transformClientViewModelDSToClientInputControllerDS(client);
    this.checkClientLoan.validate(clientInputControllerDS);
  }
}