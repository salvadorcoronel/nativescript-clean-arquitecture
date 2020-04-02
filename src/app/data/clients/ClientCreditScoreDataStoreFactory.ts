import { ClientCreditScoreDataStoreRepository } from "./ClientCreditScoreDataStoreRepository";
import { ClientCreditScoreDataStoreLocalImpl } from "./ClientCreditScoreDataStoreLocalImpl";
import { ClientCreditScoreDataStoreRemoteImpl } from "./ClientCreditScoreDataStoreRemoteImpl";
import { ClientCreditScoreDataStore } from "~/app/interface-adapters/gateway/clients/ClientCreditScoreDataStore";

export abstract class ClientCreditScoreDataStoreFactory {
  static create(repository: ClientCreditScoreDataStoreRepository): ClientCreditScoreDataStore {
    switch (repository) {
      case ClientCreditScoreDataStoreRepository.LOCAL:
        return new ClientCreditScoreDataStoreLocalImpl();
      case ClientCreditScoreDataStoreRepository.REMOTE:
        return new ClientCreditScoreDataStoreRemoteImpl();
      default:
        break;
    }
  }
}