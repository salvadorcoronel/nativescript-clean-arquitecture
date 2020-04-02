import { ClientDataStore } from "~/app/interface-adapters/gateway/clients/ClientDataStore";
import { ClientDataStoreFactory } from "~/app/data/clients/ClientDataStoreFactory";
import { ClientDataStoreRepository } from "~/app/data/clients/ClientDataStoreRepository";
import { ClientDataAccess } from "~/app/domain/ClientDataAccess";
import { ClientInputDataAccessDS } from "~/app/domain/use-cases/check-client-loan/mapper/ClientInputDataAccessDS";
import { ClientOutputDataAccessDS } from "~/app/domain/use-cases/check-client-loan/mapper/ClientOutputDataAccessDS";
import { ClientGatewayMapper } from "./mapper/ClientGatewayMapper";

export class ClientDataAccessImpl implements ClientDataAccess {
  dataStoreFactory: ClientDataStore;
  constructor() {
    this.dataStoreFactory = ClientDataStoreFactory.create(ClientDataStoreRepository.AWS);
  }

  save(client: ClientInputDataAccessDS): boolean {
    return this.dataStoreFactory.save(ClientGatewayMapper.transformClientInputDataAccessDSToClientInputDS(client));
  }

  getAll(): ClientOutputDataAccessDS[] {
    return this.dataStoreFactory.getAll().map(item => {
      return ClientGatewayMapper.transformClientOutputDSDataToClientOutputDataAccessDS(item);
    });
  }
}