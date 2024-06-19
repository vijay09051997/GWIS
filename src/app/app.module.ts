import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolicyComponent } from './policy/policy.component';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';
import { DetailCliamHistoryComponent } from './detail-cliam-history/detail-cliam-history.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PolicyComponent,
    ClaimHistoryComponent,
    DetailCliamHistoryComponent,
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
