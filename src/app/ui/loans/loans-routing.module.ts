import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { EstimationComponent } from "./estimation/estimation.component";

export const routes: Routes = [
  {
    path: "",
    component: EstimationComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class LoansRoutingModule { }