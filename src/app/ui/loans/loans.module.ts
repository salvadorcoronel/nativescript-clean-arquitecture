import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoansRoutingModule } from './loans-routing.module';
import { EstimationComponent } from './estimation/estimation.component';

@NgModule({
  declarations: [EstimationComponent],
  imports: [
    NativeScriptCommonModule,
    LoansRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoansModule { }
