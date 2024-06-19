import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';
import { DetailCliamHistoryComponent } from './detail-cliam-history/detail-cliam-history.component';
import { DealerClaimApplicationComponent } from './dealer-claim-application/dealer-claim-application.component';
import { ServiceAdvisorComponent } from './service-advisor/service-advisor.component';
import { ClaimRefServiceComponent } from './claim-ref-service/claim-ref-service.component';
import { ServiceHistoryComponent } from './service-history/service-history.component';
import { PartLabourCostComponent } from './part-labour-cost/part-labour-cost.component';
import { InspectionComponent } from './inspection/inspection.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ClaimsManagerComponent } from './claims-manager/claims-manager.component';

const routes: Routes = [
  { path: 'policy', component: PolicyComponent },
  { path: '', redirectTo: '/policy', pathMatch: 'full' },
  { path: 'claim-history', component: ClaimHistoryComponent },
  { path: 'detail-claim-history', component: DetailCliamHistoryComponent },
  { path: 'dealer-claim-app', component: DealerClaimApplicationComponent },
  { path: 'service-advisor', component: ServiceAdvisorComponent },
  { path: 'claim-ref', component: ClaimRefServiceComponent },
  { path: 'service-history', component: ServiceHistoryComponent },
  { path: 'part-labour', component: PartLabourCostComponent },
  { path: 'inspection', component: InspectionComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'claim-manager', component: ClaimsManagerComponent },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
