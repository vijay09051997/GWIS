import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';
import { DetailCliamHistoryComponent } from './detail-cliam-history/detail-cliam-history.component';

const routes: Routes = [
  { path: 'policy', component: PolicyComponent },
  { path: '', redirectTo: '/policy', pathMatch: 'full' },
  { path: 'claim-history', component: ClaimHistoryComponent },
  { path: 'detail-claim-history', component: DetailCliamHistoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
