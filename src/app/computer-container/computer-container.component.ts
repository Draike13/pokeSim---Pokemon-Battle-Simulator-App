import { Component } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { MatButtonModule } from '@angular/material/button';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-computer-container',
  imports: [MatButtonModule],
  templateUrl: './computer-container.component.html',
  styleUrl: './computer-container.component.css',
})
export class ComputerContainerComponent {
  constructor(private helperService: HelperService) {
    this.getParty();
  }

  getParty() {
    return this.helperService.party;
  }
}
