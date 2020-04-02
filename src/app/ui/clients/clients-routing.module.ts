import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ClientComponent } from "./client/client.component";
import { CheckLoanComponent } from "./check-loan/check-loan.component";

export const routes: Routes = [
  {
    path: "",
    component: CheckLoanComponent
  },
  {
    path: "",
    component: ClientComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ClientsRoutingModule { }