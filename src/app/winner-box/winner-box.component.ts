import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-winner-box',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './winner-box.component.html',
  styleUrl: './winner-box.component.css',
})
export class WinnerBoxComponent {}
