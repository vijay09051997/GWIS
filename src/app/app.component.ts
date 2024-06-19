import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GWIS';
  isPolicySearchMenuOpen = false;
  isClaimSearchMenuOpen = false;

  togglePolicySearchMenu() {
    this.isPolicySearchMenuOpen = !this.isPolicySearchMenuOpen;
  }
  toggleClaimSearchMenu(){
    this.isClaimSearchMenuOpen = !this.isClaimSearchMenuOpen;

  }
}
