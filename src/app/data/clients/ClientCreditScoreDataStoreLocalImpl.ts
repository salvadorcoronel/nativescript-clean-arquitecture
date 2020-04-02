
import { ClientCreditScoreDS } from "./ClientCreditScoreDS";
import { ClientCreditScoreDataStore } from "~/app/interface-adapters/gateway/clients/ClientCreditScoreDataStore";

export class ClientCreditScoreDataStoreLocalImpl implements ClientCreditScoreDataStore {
  clientCreditScoreList: ClientCreditScoreDS[] = [
    { dni: '41111111', creditScore: 520 },
    { dni: '42222222', creditScore: 510 },
    { dni: '43333333', creditScore: 250 },
    { dni: '46200966', creditScore: 644 },
    { dni: '55555555', creditScore: 510 },
  ];

  getClientScoreByClientDNI(clientDNI: string): ClientCreditScoreDS {
    const clientStore: ClientCreditScoreDS[] = this.clientCreditScoreList.filter(clientScore => {
      return clientScore.dni === clientDNI;
    });

    if (clientStore.length > 0) {
      return clientStore[0];
    }
    return null;
  }

}