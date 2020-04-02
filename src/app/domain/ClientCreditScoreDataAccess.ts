import { ClientCreditScore } from "./entities/ClientCreditScore";

export interface ClientCreditScoreDataAccess {
  getClientScoreByClientDNI(clientDNI: string): ClientCreditScore;
}