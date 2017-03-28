import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CreativeModule } from './creative/creative.module';
import { CreativeRoutingModule } from './creative/creative-routing.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		NgbModule.forRoot(),
		CreativeModule,
		CreativeRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
