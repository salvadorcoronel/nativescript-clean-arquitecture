import { ClientInputDataAccessDS } from "./mapper/ClientInputDataAccessDS";
import { Client } from "../../entities/Client";
import { ClientInteractorMapper } from "./mapper/ClientInteractorMapper";
import { ClientCreditScore } from "../../entities/ClientCreditScore";
import { ClientCreditScoreDataAccess } from "~/app/domain/ClientCreditScoreDataAccess";
import { ClientDataAccess } from "../../ClientDataAccess";
import { ClientInputControllerDS } from "./mapper/ClientInputControllerDS";
import { CheckClientLoanInputBoundary } from "./CheckClientLoanInputBoundary";
import { CheckClientLoanOutputBoundary } from "./CheckClientLoanOutputBoundary";

export class CheckClientLoanImpl implements CheckClientLoanInputBoundary {
  clientCreditScoreDataAccess: ClientCreditScoreDataAccess;
  clientDataAccess: ClientDataAccess;
  checkClientLoanOutputBoundary: CheckClientLoanOutputBoundary;
  // 1. accept and validate names
  // 2. validate dni
  // 3. get credit score
  // 4. if credit score < 500 active loan refusal
  // 5. if credit score >= 500 so crete user and activate loan estimate
  constructor(
    clientCreditScoreDataAccess: ClientCreditScoreDataAccess,
    clientDataAccess: ClientDataAccess,
    checkClientLoanOutputBoundary: CheckClientLoanOutputBoundary) {
    this.clientCreditScoreDataAccess = clientCreditScoreDataAccess;
    this.clientDataAccess = clientDataAccess;
    this.checkClientLoanOutputBoundary = checkClientLoanOutputBoundary;
  }

  check(client: ClientInputControllerDS): boolean {
    const clientObj: Client = ClientInteractorMapper.transformClientInputControllerDSToClient(client);

    // 1 and 2
    if (clientObj.validateFirstName() && clientObj.validateLastName() && clientObj.validateDNI()) {

      // add Mapper: avoid use ClientCreditScore into gateway
      const clientCreditScoreObj: ClientCreditScore = this.clientCreditScoreDataAccess.getClientScoreByClientDNI(clientObj.dni);

      // 5
      if (clientCreditScoreObj.creditScore >= 500) {
        const clientInputDS: ClientInputDataAccessDS = {
          firstName: clientObj.firstName,
          lastName: clientObj.lastName,
          dni: clientObj.dni
        };
        this.checkClientLoanOutputBoundary.onCheck(this.clientDataAccess.save(clientInputDS));

      } // 4
    }

    return false;
  }
} 