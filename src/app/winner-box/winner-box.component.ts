import {
  Component,
  computed,
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
  ngDoCheck() {
    this.playerAttackCalc();
  }

  playerAttack: WritableSignal<number> = signal(0);

  playerAttackCalc() {
    if (this.playerPokemon.atk !== null) {
      this.playerAttack.set(this.playerPokemon.atk);
    } else {
      this.playerAttack.set(this.playerPokemon.sAtk);
    }
  }

  // computerAttack() {
  //   let displayPokemon = computerPokemon;
  //   if (typeof displayPokemon?.atk === 'number') {
  //     this.computerAttackStat = displayPokemon.atk;
  //   } else if (typeof displayPokemon?.sAtk === 'number') {
  //     this.computerAttackStat = displayPokemon.sAtk;
  //   }
  //
  // }
}
