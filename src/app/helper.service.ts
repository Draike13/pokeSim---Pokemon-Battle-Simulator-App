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

  party: Pokemon[] = [];
  partyCount = 0;

  makeParty() {
    do {
      let randomIndex = Math.floor(Math.random() * this.pokemon.length);
      if (
        !this.party.some(
          (currentPokemon) => currentPokemon.id === this.pokemon[randomIndex].id
        )
      ) {
        this.party.push(this.pokemon[randomIndex]);
        this.partyCount++;
      }
    } while (this.partyCount < 6);
  }
}
