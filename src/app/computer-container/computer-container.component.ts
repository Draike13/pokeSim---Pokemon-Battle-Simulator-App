import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Pokemon } from '../pokemon.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-computer-container',
  imports: [MatButtonModule],
  templateUrl: './computer-container.component.html',
  styleUrl: './computer-container.component.css',
})
export class ComputerContainerComponent {
  constructor(private dataService: DataService) {
    this.getList();
  }
  pokelist: Pokemon[] = [];
  party: Pokemon[] = [];

  getList() {
    this.pokelist = this.dataService.pokeData;
    let randomIndex = Math.floor(Math.random() * (this.pokelist.length + 1));
    this.party.push(this.pokelist[randomIndex]);
  }
}
