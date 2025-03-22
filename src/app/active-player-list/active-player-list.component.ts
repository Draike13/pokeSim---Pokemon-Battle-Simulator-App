import { Component } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { MatButtonModule } from '@angular/material/button';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-active-player-list',
  imports: [MatButtonModule],
  templateUrl: './active-player-list.component.html',
  styleUrl: './active-player-list.component.css',
})
export class ActivePlayerListComponent {
  constructor(private helperService: HelperService) {
    this.getParty();
  }

  getParty() {
    return this.helperService.playerParty;
  }
}
