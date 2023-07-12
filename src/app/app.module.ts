import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';
import { StylingComponent } from './styling/styling.component';
import { ServerBlueprintComponent } from './server-blueprint/server-blueprint.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './structuralDir/unless.directive';
import { AccountMainComponent } from './account-main/account-main.component';
import { AccountComponent } from './account-main/account/account.component';
import { NewAccountComponent } from './account-main/new-account/new-account.component';
import { AccountsService } from './account-main/shared/accounts.service';
import { LoggingService } from './account-main/shared/logging.service';

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, 
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    TwowaybindComponent,
    StylingComponent,
    ServerBlueprintComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountMainComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
