import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HelperService } from '../helper.service';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private helperService: HelperService) {}

  startGame() {
    this.resetGame();
    this.loadPlayerPokemon;
    this.loadComputerPokemon;
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
