import { ClientCreditScoreDS } from "~/app/data/clients/ClientCreditScoreDS";

export interface ClientCreditScoreDataStore {
  getClientScoreByClientDNI(clientDNI: string): ClientCreditScoreDS;
}