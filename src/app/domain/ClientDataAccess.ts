import { ClientInputDataAccessDS } from "./use-cases/check-client-loan/mapper/ClientInputDataAccessDS";
import { ClientOutputDataAccessDS } from "./use-cases/check-client-loan/mapper/ClientOutputDataAccessDS";

export interface ClientDataAccess {
  save(client: ClientInputDataAccessDS): boolean;
  getAll(): ClientOutputDataAccessDS[];
}