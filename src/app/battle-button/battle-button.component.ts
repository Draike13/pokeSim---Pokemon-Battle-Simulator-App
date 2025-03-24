import { Component } from '@angular/core';
import { HelperService } from '../helper.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-battle-button',
  imports: [MatButtonModule],
  templateUrl: './battle-button.component.html',
  styleUrl: './battle-button.component.css',
})
export class BattleButtonComponent {
  constructor(private helperService: HelperService) {}

  beginBattle() {
    this.helperService.calculateBattle();
  }
}
