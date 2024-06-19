import { Component } from '@angular/core';

@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.component.html',
  styleUrls: ['./service-history.component.scss']
})
export class ServiceHistoryComponent {

  serviceScheduleMonths: number = 6;
  serviceScheduleKm: number = 9000;

  serviceRecords = [
    {
      invoiceDate: '18-08-19',
      odoMeterReading: 9102,
      serviceMileage: '1,100 Delay',
      servicePeriod: 'Periodical Service due ON 1/06/2024, but no SVC',
      serviceCenter: 'FORD SVC Center'
    },
    // Add more records as needed
  ];

  goBack() {
    // Implement back button functionality
  }

  processClaim() {
    // Implement process claim functionality
  }
}