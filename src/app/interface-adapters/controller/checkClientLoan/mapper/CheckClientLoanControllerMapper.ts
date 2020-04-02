import { ClientViewModelDS } from "../ClientViewModelDS";
import { ClientInputControllerDS } from "~/app/domain/use-cases/check-client-loan/mapper/ClientInputControllerDS";

export abstract class CheckClientLoanControllerMapper {
  static transformClientViewModelDSToClientInputControllerDS(client: ClientViewModelDS): ClientInputControllerDS {
    return {
      firstName: client.firstName,
      lastName: client.lastName,
      dni: client.dni
    };
  }
}