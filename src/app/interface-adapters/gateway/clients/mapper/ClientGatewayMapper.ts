import { ClientInputDS } from "~/app/data/clients/ClientInputDS";
import { ClientInputDataAccessDS } from "~/app/domain/use-cases/check-client-loan/mapper/ClientInputDataAccessDS";
import { ClientOutputDataAccessDS } from "~/app/domain/use-cases/check-client-loan/mapper/ClientOutputDataAccessDS";
import { ClientOutputDS } from "~/app/data/clients/ClientOutputDS";

export abstract class ClientGatewayMapper {
  static transformClientInputDataAccessDSToClientInputDS(client: ClientInputDataAccessDS): ClientInputDS {
    return {
      firstName: client.firstName,
      lastName: client.lastName,
      dni: client.dni
    };
  }

  static transformClientOutputDSDataToClientOutputDataAccessDS(client: ClientOutputDS): ClientOutputDataAccessDS {
    return {
      id: client.id,
      firstName: client.firstName,
      lastName: client.lastName,
      dni: client.dni,
    }
  }
}