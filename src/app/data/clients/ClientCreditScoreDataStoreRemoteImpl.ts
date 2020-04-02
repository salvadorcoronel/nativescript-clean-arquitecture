
import { ClientCreditScoreDS } from "./ClientCreditScoreDS";
import { ClientCreditScoreDataStore } from "~/app/interface-adapters/gateway/clients/ClientCreditScoreDataStore";

export class ClientCreditScoreDataStoreRemoteImpl implements ClientCreditScoreDataStore {

  clientCreditScoreList: ClientCreditScoreDS[] = [
    { dni: '41111111', creditScore: 520 },
    { dni: '42222222', creditScore: 510 },
    { dni: '43333333', creditScore: 250 },
    { dni: '46200966', creditScore: 330 },
    { dni: '55555555', creditScore: 510 },
  ];

  getClientScoreByClientDNI(clientDNI: string): ClientCreditScoreDS {
    // logic to call to remote service using httpClient
    return null;
  }

}