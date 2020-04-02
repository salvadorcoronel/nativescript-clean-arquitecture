import { ClientInputDS } from "~/app/data/clients/ClientInputDS";
import { ClientOutputDS } from "~/app/data/clients/ClientOutputDS";

export interface ClientDataStore {
  save(client: ClientInputDS): boolean;
  getAll(): ClientOutputDS[];
}