import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './features/game-board/game-board.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { RulePageComponent } from './pages/rule-page/rule-page.component';
import { GameMenuComponent } from './features/game-menu/game-menu.component';
import { StartMenuComponent } from './features/start-menu/start-menu.component';
import { MenuButtonComponent } from './shared/components/menu-button/menu-button.component';
import { GameButtonComponent } from './shared/components/game-button/game-button.component';
import { CssVariablePipe } from './shared/pipes/css-variable/css-variable.pipe';
import { RulesMenuComponent } from './features/rules-menu/rules-menu.component';
import { CheckButtonComponent } from './shared/svgs/check-button/check-button.component';
import { BoardHeaderComponent } from './pages/game-page/layout/board-header/board-header.component';
import { GameTimerComponent } from './shared/components/game-timer/game-timer.component';
import { PlayerCardComponent } from './shared/components/player-card/player-card.component';
import { WinMenuComponent } from './shared/components/win-menu/win-menu.component';
import { GameSessionService } from './core/services/game-session.service';
import { BoardFooterComponent } from './pages/game-page/layout/board-footer/board-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    HomePageComponent,
    GamePageComponent,
    RulePageComponent,
    GameMenuComponent,
    StartMenuComponent,
    MenuButtonComponent,
    GameButtonComponent,
    CssVariablePipe,
    RulesMenuComponent,
    CheckButtonComponent,
    BoardHeaderComponent,
    GameTimerComponent,
    PlayerCardComponent,
    WinMenuComponent,
    BoardFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ GameSessionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
