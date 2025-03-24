import { Injectable, WritableSignal } from '@angular/core';
import { DataService } from './data.service';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private dataService: DataService) {}

  get pokemon() {
    return this.dataService.pokeData();
  }

  playerParty: Pokemon[] = [];
  computerParty: Pokemon[] = [];

  makePlayerParty() {
    let partyCount = 0;
    do {
      let randomIndex = Math.floor(Math.random() * this.pokemon.length);
      if (
        !this.playerParty.some(
          (currentPokemon) => currentPokemon.id === this.pokemon[randomIndex].id
        )
      ) {
        this.playerParty.push(this.pokemon[randomIndex]);
        partyCount++;
      }
    } while (partyCount < 6);
  }
  makeComputerParty() {
    let partyCount = 0;
    do {
      let randomIndex = Math.floor(Math.random() * this.pokemon.length);
      if (
        !this.computerParty.some(
          (currentPokemon) => currentPokemon.id === this.pokemon[randomIndex].id
        )
      ) {
        this.computerParty.push(this.pokemon[randomIndex]);
        partyCount++;
      }
    } while (partyCount < 6);
  }

  setupBattle(pokemon: Pokemon) {
    pokemon.selected = true;
  }
}
