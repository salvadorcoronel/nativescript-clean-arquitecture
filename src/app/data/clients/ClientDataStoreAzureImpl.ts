
import { ClientInputDS } from "./ClientInputDS";
import { ClientOutputDS } from "./ClientOutputDS";
import { ClientDataStore } from "~/app/interface-adapters/gateway/clients/ClientDataStore";

export class ClientDataStoreAzureImpl implements ClientDataStore {

  save(client: ClientInputDS): boolean {
    return true;
  }

  getAll(): ClientOutputDS[] {
    throw new Error("Method not implemented.");
  }

}