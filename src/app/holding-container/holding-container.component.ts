import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-holding-container',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './holding-container.component.html',
  styleUrl: './holding-container.component.css',
})
export class HoldingContainerComponent {}
