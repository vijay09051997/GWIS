import { Component } from '@angular/core';

@Component({
  selector: 'app-part-labour-cost',
  templateUrl: './part-labour-cost.component.html',
  styleUrls: ['./part-labour-cost.component.scss']
})
export class PartLabourCostComponent {

  partCostDetails = [
    { partCost: 500.00, dealerDiscount: '45%', goodWill: '5%', labourCost: 500.00, labourHours: 24, goodWillDiscount: 0.00, total: 700.00 },
    { partCost: 400.00, dealerDiscount: '45%', goodWill: '5%', labourCost: 400.00, labourHours: 15, goodWillDiscount: 0.00, total: 560.00 },
    { partCost: 300.00, dealerDiscount: '45%', goodWill: '5%', labourCost: 300.00, labourHours: 5, goodWillDiscount: 0.00, total: 420.00 },
    { partCost: 300.00, dealerDiscount: '45%', goodWill: '5%', labourCost: 300.00, labourHours: 3, goodWillDiscount: 0.00, total: 420.00 }
  ];

  partCostSum = this.partCostDetails.reduce((sum, item) => sum + item.partCost, 0);
  totalServiceCost = 0;
  amountAfterDiscount = 0;
  deductible = 0;
  taxPercentage = 0;
  taxValue = 0;
  totalClaimAmount = 0;
}
