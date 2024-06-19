import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-cliam-history',
  templateUrl: './detail-cliam-history.component.html',
  styleUrls: ['./detail-cliam-history.component.scss']
})
export class DetailCliamHistoryComponent {

  filters = {
    claimNo: '',
    policyNo: '',
    fromDate: '',
    toDate: '',
    workshop: '',
    claimStatus: '',
    invoiceNo: '',
    payee: '',
    dealer: ''
  };

  workshops = ['Workshop 1', 'Workshop 2', 'Workshop 3'];
  statuses = ['Authorized', 'On Hold', 'Rejected', 'Cancelled'];
  payees = ['Payee 1', 'Payee 2', 'Payee 3'];
  dealers = ['Dealer 1', 'Dealer 2', 'Dealer 3'];

  claims = [
    {
      policyNo: 'GBCD032025',
      claimNo: '2130',
      claimStatus: 'Authorized',
      claimDate: new Date('2023-06-01'),
      payee: 'Shamik Haider',
      repairer: 'Shamik Haider',
      partDetails: 'Heading Bumper Side Glass',
      serviceDetails: 'Mileage, Brake pads',
      totalPartsCost: 14500.00,
      totalLabourCost: 2000.00,
      totalServiceCost: 1000.00,
      taxValue: 1500.00,
      totalClaimAmount: 19000.00,
      paidValue: 14000.00,
      inspectDone: 'Done'
    },
    {
      policyNo: 'GBCD032025',
      claimNo: '2786',
      claimStatus: 'Authorized',
      claimDate: new Date('2023-07-02'),
      payee: 'Qweish Qureshi',
      repairer: 'Atif Aslam',
      partDetails: 'AC Filters',
      serviceDetails: 'Mileage, In Car Cleaning',
      totalPartsCost: 5000.00,
      totalLabourCost: 2500.00,
      totalServiceCost: 2000.00,
      taxValue: 500.00,
      totalClaimAmount: 10000.00,
      paidValue: 2500.00,
      inspectDone: 'Done'
    }
  ];

  search() {
    // Implement search functionality
  }
}