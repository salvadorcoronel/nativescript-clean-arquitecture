import { ClientInputControllerDS } from "./mapper/ClientInputControllerDS";

export interface CheckClientLoanInputBoundary {
  check(client: ClientInputControllerDS): void;
  validate(client: ClientInputControllerDS): void;
}