import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy,  HashLocationStrategy } from '@angular/common';
import { UrlSerializer } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { MyProjectModule }  from './my-project/my-project.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MyProjectModule
  ],
  providers: [
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
