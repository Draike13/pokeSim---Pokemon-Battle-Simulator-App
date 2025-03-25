import {
  Component,
  effect,
  Input,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgStyle } from '@angular/common';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-holding-container',
  imports: [MatCardModule, MatButtonModule, NgStyle],
  templateUrl: './holding-container.component.html',
  styleUrl: './holding-container.component.css',
})
export class HoldingContainerComponent {
  @Input() backgroundSignal: WritableSignal<string> = signal('transparent');
  constructor(private helperService: HelperService) {}

  get playerBackgroundColor() {
    return this.helperService.playerBackground();
  }

  updatePlayerBackground = effect(() => {
    if (this.helperService.playerSelectPokemon()) {
      this.helperService.setPlayerBackground();
    }
  });
}
