import { ClientCreditScore } from "~/app/domain/entities/ClientCreditScore";
import { ClientCreditScoreDS } from "~/app/data/clients/ClientCreditScoreDS";


export abstract class ClientCreditScoreMapper {

  static transformDataSourceToClientCreditScore(client: ClientCreditScoreDS): ClientCreditScore {
    if (client === null) {
      return null;
    }
    return new ClientCreditScore(client.dni, client.creditScore);
  }

}