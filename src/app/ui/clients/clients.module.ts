import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ClientComponent } from './client/client.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { CheckClientLoanControllerImpl } from '~/app/interface-adapters/controller/CheckClientLoanControllerImpl';
import { CheckLoanComponent } from './check-loan/check-loan.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms"

@NgModule({
  declarations: [ClientComponent, CheckLoanComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ClientsRoutingModule
  ],
  providers: [
    CheckClientLoanControllerImpl
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ClientsModule { }
