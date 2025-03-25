import {
  Component,
  computed,
  effect,
  NgModule,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HelperService } from '../helper.service';
@Component({
  selector: 'app-winner-box',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './winner-box.component.html',
  styleUrl: './winner-box.component.css',
})
export class WinnerBoxComponent {
  constructor(private helperService: HelperService) {}
  get computerPokemon() {
    return this.helperService.computerBattlePokemon();
  }
  get playerPokemon() {
    return this.helperService.playerBattlePokemon();
  }
  battleReady = effect(() => {
    if (this.playerPokemon) {
      this.playerAttackCalc();
    }
    if (this.computerPokemon) {
      this.computerAttackCalc();
    }
  });

  playerAttack: WritableSignal<number | string> = signal('');
  computerAttack: WritableSignal<number | string> = signal('');

  playerAttackCalc() {
    if (this.playerPokemon.atk !== null) {
      this.playerAttack.set(this.playerPokemon.atk);
    } else {
      this.playerAttack.set(this.playerPokemon.sAtk);
    }
  }
  computerAttackCalc() {
    if (this.computerPokemon.atk !== null) {
      this.computerAttack.set(this.computerPokemon.atk);
    } else {
      this.computerAttack.set(this.computerPokemon.sAtk);
    }
  }
}
