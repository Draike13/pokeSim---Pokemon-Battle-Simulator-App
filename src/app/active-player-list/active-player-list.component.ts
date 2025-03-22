import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Pokemon } from '../pokemon.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-active-player-list',
  imports: [MatButtonModule],
  templateUrl: './active-player-list.component.html',
  styleUrl: './active-player-list.component.css',
})
export class ActivePlayerListComponent {
  constructor(private dataService: DataService) {
    this.getList();
  }
  pokelist: Pokemon[] = [];
  party: Pokemon[] = [];
  partyCount = 0;

  getList() {
    this.pokelist = this.dataService.pokeData;
    do {
      let randomIndex = Math.floor(Math.random() * this.pokelist.length);
      if (
        !this.party.some(
          (pokemon) => pokemon.id === this.pokelist[randomIndex].id
        )
      ) {
        this.party.push(this.pokelist[randomIndex]);
        this.partyCount++;
      }
    } while (this.partyCount < 6);
  }
}
