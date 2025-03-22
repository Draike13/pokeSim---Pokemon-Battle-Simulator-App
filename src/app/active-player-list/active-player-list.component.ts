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

  getList() {
    this.pokelist = this.dataService.pokeData;
  }
}
