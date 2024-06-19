import { Component } from '@angular/core';

@Component({
  selector: 'app-service-advisor',
  templateUrl: './service-advisor.component.html',
  styleUrls: ['./service-advisor.component.scss']
})
export class ServiceAdvisorComponent {
  dealerName: string = '';
  submissionDate: string = '';

  dataSource = [
    { dealerName: 'Coldkey Toyota', submissionDate: '05/05/2024', claimRefNo: '1458939', gwisReplyDate: '05/05/2024', status: 'Sent', approvedJob: 'Approved', claimsInvoice: 'View' },
    { dealerName: 'Bosch Cars', submissionDate: '05/06/2024', claimRefNo: '1458940', gwisReplyDate: '05/06/2024', status: 'Sent', approvedJob: 'Approved', claimsInvoice: 'View' }
  ];

  search() {
    console.log('Search clicked', this.dealerName, this.submissionDate);
  }

  reset() {
    this.dealerName = '';
    this.submissionDate = '';
  }
}
