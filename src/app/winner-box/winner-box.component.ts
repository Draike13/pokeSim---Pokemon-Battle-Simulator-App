import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HelperService } from '../helper.service';
@Component({
  selector: 'app-winner-box',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './winner-box.component.html',
  styleUrl: './winner-box.component.css',
})
export class WinnerBoxComponent {
  constructor(private helperService: HelperService) {}
  get computerPokemon() {
    return this.helperService.computerBattlePokemon();
  }
  get playerPokemon() {
    return this.helperService.playerBattlePokemon();
  }
}
