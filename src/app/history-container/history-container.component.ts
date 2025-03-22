import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-history-container',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './history-container.component.html',
  styleUrl: './history-container.component.css',
})
export class HistoryContainerComponent {
  eeveeImage = `https://pm1.aminoapps.com/6234/2370b3a2cbe255cd88f533680d2e7a42eb8d20e7_hq.jpg`;
}
