import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-history-container',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './history-container.component.html',
  styleUrl: './history-container.component.css',
})
export class HistoryContainerComponent {
  constructor(private helperService: HelperService) {}
  eeveeImage = `https://pm1.aminoapps.com/6234/2370b3a2cbe255cd88f533680d2e7a42eb8d20e7_hq.jpg`;

  rerollCount = 3;

  reroll() {
    if (this.rerollCount > 0) {
      this.resetGame();
      this.loadPlayerPokemon;
      this.loadComputerPokemon;
      this.rerollCount--;
    }
  }
  get loadPlayerPokemon() {
    this.helperService.playerParty.set([]);
    return this.helperService.makePlayerParty();
  }
  get loadComputerPokemon() {
    this.helperService.computerParty.set([]);
    return this.helperService.makeComputerParty();
  }
  resetGame() {
    this.helperService.pokemon.map(
      (eachPokemon) => (eachPokemon.selected = false)
    );
    this.helperService.playerBackground.set('transparent');
    this.helperService.computerBackground.set('transparent');
    this.helperService.playerBattlePokemon.set('');
    this.helperService.computerBattlePokemon.set('');
  }
}
