import { Client } from "~/app/domain/entities/Client";
import { ClientInputControllerDS } from "./ClientInputControllerDS";
import { ClientOutputPresenterDS } from "./ClientOutputPresenterDS";

export abstract class ClientInteractorMapper {

  // called from Use Case
  static transformClientInputControllerDSToClient(client: ClientInputControllerDS): Client {
    return new Client(null, client.firstName, client.lastName, client.dni);
  }

  // called from Use Case
  static transformClientToClientOutputPresenterDS(client: Client): ClientOutputPresenterDS {
    return {
      id: client.id,
      firstName: client.firstName,
      lastName: client.lastName,
      dni: client.dni
    };
  }
}