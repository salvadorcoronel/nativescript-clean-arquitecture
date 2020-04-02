import { ClientDataStoreRepository } from "./ClientDataStoreRepository";
import { ClientDataStoreAWSImpl } from "./ClientDataStoreAWSImpl";
import { ClientDataStoreAzureImpl } from "./ClientDataStoreAzureImpl";
import { ClientDataStore } from "~/app/interface-adapters/gateway/clients/ClientDataStore";

export abstract class ClientDataStoreFactory {
  static create(repository: ClientDataStoreRepository): ClientDataStore {
    switch (repository) {
      case ClientDataStoreRepository.AWS:
        return new ClientDataStoreAWSImpl();
      case ClientDataStoreRepository.AZURE:
        return new ClientDataStoreAzureImpl();
      default:
        break;
    }
  }
}