import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CreativeComponent } from './creative.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppcontentComponent } from './appcontent/appcontent.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
	imports: [
		CommonModule,
		NgbModule
	],
	declarations: [
		CreativeComponent,
		AppheaderComponent,
		AppcontentComponent,
		AppfooterComponent,
		ErrorComponent
	],
	exports: [
		CreativeComponent,
		AppheaderComponent,
		AppcontentComponent,
		AppfooterComponent,
		ErrorComponent
	]
})
export class CreativeModule { }
