import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/clients", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/ui/home/home.module").then((m) => m.HomeModule) },
    { path: "estimation", loadChildren: () => import("~/app/ui/loans/loans.module").then((m) => m.LoansModule) },
    { path: "clients", loadChildren: () => import("~/app/ui/clients/clients.module").then((m) => m.ClientsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
