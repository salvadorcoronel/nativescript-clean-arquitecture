import { ClientCreditScoreDataAccess } from "~/app/domain/ClientCreditScoreDataAccess";
import { ClientCreditScoreDataStoreFactory } from "~/app/data/clients/ClientCreditScoreDataStoreFactory";
import { ClientCreditScoreDataStoreRepository } from "~/app/data/clients/ClientCreditScoreDataStoreRepository";
import { ClientCreditScore } from "~/app/domain/entities/ClientCreditScore";
import { ClientCreditScoreMapper } from "~/app/interface-adapters/gateway/clients/mapper/ClientCreditScoreMapper";
import { ClientCreditScoreDataStore } from "./ClientCreditScoreDataStore";

export class ClientCreditScoreDataAccessImpl implements ClientCreditScoreDataAccess {
  dataStoreFactory: ClientCreditScoreDataStore;
  constructor() {
    this.dataStoreFactory = ClientCreditScoreDataStoreFactory.create(ClientCreditScoreDataStoreRepository.LOCAL);
  }

  getClientScoreByClientDNI(clientDNI: string): ClientCreditScore {
    return ClientCreditScoreMapper.transformDataSourceToClientCreditScore(this.dataStoreFactory.getClientScoreByClientDNI(clientDNI));
  }

}