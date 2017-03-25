import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';


import { CreativeRoutingModule } from './creative-routing.module';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppcontentComponent } from './appcontent/appcontent.component';
import { AppfooterComponent } from './appfooter/appfooter.component';

@NgModule({
	imports: [
		CommonModule,
		ClarityModule,
		CreativeRoutingModule
	],
	declarations: [AppheaderComponent, AppcontentComponent, AppfooterComponent],
	exports: [
		AppheaderComponent,
		AppcontentComponent,
		AppfooterComponent
	]
})
export class CreativeModule { }
