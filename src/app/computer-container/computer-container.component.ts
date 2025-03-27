import { Component } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { MatButtonModule } from '@angular/material/button';
import { HelperService } from '../helper.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-computer-container',
  imports: [MatButtonModule, NgClass],
  templateUrl: './computer-container.component.html',
  styleUrl: './computer-container.component.css',
})
export class ComputerContainerComponent {
  constructor(private helperService: HelperService) {
    this.getParty();
  }

  get getParty() {
    return this.helperService.computerParty;
  }
}
