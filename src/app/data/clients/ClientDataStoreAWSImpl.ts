
import { ClientInputDS } from "./ClientInputDS";
import { ClientOutputDS } from "./ClientOutputDS";
import { ClientDataStore } from "~/app/interface-adapters/gateway/clients/ClientDataStore";

export class ClientDataStoreAWSImpl implements ClientDataStore {
  clientList: ClientOutputDS[] = [
    { id: '1', firstName: 'Salvador', lastName: 'Coronel', dni: '41111111' },
    { id: '2', firstName: 'Leyli', lastName: 'Rafael', dni: '42222222' },
    { id: '3', firstName: 'Juan', lastName: 'Coronel', dni: '43333333' },
    { id: '4', firstName: 'Elena', lastName: 'Coronel', dni: '44444444' },
    { id: '5', firstName: 'Rosa', lastName: 'Coronel', dni: '55555555' },
  ];

  save(client: ClientInputDS): boolean {
    return this.clientList.push({
      id: ((new Date()).getMilliseconds()).toString(),
      ...client
    }) > 0;
  }

  getAll(): ClientOutputDS[] {
    throw new Error("Method not implemented.");
  }

}