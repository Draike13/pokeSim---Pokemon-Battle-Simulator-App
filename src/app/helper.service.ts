import {
  effect,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
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

  playerBattlePokemon: WritableSignal<any> = signal('');
  computerBattlePokemon: WritableSignal<any> = signal('');
  playerSelectPokemon: WritableSignal<any> = signal('');

  playerBackground: WritableSignal<string> = signal('transparent');
  computerBackground: WritableSignal<string> = signal('transparent');

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
        ) &&
        !this.playerParty.some(
          (currentPokemon) => currentPokemon.id === this.pokemon[randomIndex].id
        )
      ) {
        this.computerParty.push(this.pokemon[randomIndex]);
        partyCount++;
      }
    } while (partyCount < 6);
  }

  setPlayerBackground() {
    if (this.playerSelectPokemon().image) {
      this.playerBackground.set(this.playerSelectPokemon().image!);
    } else this.playerBackground.set('transparent');
  }

  setupBattle(pokemon: Pokemon) {
    this.playerParty.map((eachPokemon) => (eachPokemon.selected = false));
    pokemon.selected = true;
    this.playerSelectPokemon.set(pokemon);
  }
  computerChoice() {
    this.computerParty.map((eachPokemon) => (eachPokemon.selected = false));
    let randomIndex = Math.floor(Math.random() * this.computerParty.length);
    this.computerParty[randomIndex].selected = true;
    this.computerBattlePokemon.set(this.computerParty[randomIndex]);
  }

  calculateBattle() {
    this.computerChoice();
    this.playerBattlePokemon.set(this.playerSelectPokemon);
  }
}
