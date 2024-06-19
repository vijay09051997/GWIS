import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-history',
  templateUrl: './claim-history.component.html',
  styleUrls: ['./claim-history.component.scss']
})
export class ClaimHistoryComponent {

  claims = [
    { noOfClaims: 2, status: 'Authorized', claimAmount: 10500.00, link: '/authorized' },
    { noOfClaims: 1, status: 'On Hold', claimAmount: 4352.00, link: '/on-hold' },
    { noOfClaims: 0, status: 'Rejected', claimAmount: 0.00, link: '/rejected' },
    { noOfClaims: 0, status: 'Cancelled', claimAmount: 0.00, link: '/cancelled' }
  ];

  constructor(private router: Router) {}

  close() {
    // Implement close functionality
  }
}
