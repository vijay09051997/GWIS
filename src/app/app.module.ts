import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolicyComponent } from './policy/policy.component';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';
import { DetailCliamHistoryComponent } from './detail-cliam-history/detail-cliam-history.component';
import { FormsModule } from '@angular/forms';
import { DealerClaimApplicationComponent } from './dealer-claim-application/dealer-claim-application.component';
import { ServiceAdvisorComponent } from './service-advisor/service-advisor.component';
import { ClaimRefServiceComponent } from './claim-ref-service/claim-ref-service.component';
import { ServiceHistoryComponent } from './service-history/service-history.component';
import { PartLabourCostComponent } from './part-labour-cost/part-labour-cost.component';
import { InspectionComponent } from './inspection/inspection.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ClaimsManagerComponent } from './claims-manager/claims-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyComponent,
    ClaimHistoryComponent,
    DetailCliamHistoryComponent,
    DealerClaimApplicationComponent,
    ServiceAdvisorComponent,
    ClaimRefServiceComponent,
    ServiceHistoryComponent,
    PartLabourCostComponent,
    InspectionComponent,
    InvoiceComponent,
    ClaimsManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
