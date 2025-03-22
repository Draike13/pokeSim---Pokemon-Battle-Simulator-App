import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HistoryContainerComponent } from './history-container/history-container.component';
import { HoldingContainerComponent } from './holding-container/holding-container.component';
import { ActivePlayerListComponent } from './active-player-list/active-player-list.component';
import { ComputerContainerComponent } from './computer-container/computer-container.component';
import { WinnerBoxComponent } from './winner-box/winner-box.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    HeaderComponent,
    FooterComponent,
    HistoryContainerComponent,
    HoldingContainerComponent,
    ActivePlayerListComponent,
    ComputerContainerComponent,
    WinnerBoxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pokeSim';
}
