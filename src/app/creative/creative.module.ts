import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { CreativeRoutingModule } from './creative-routing.module';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppcontentComponent } from './appcontent/appcontent.component';
import { AppfooterComponent } from './appfooter/appfooter.component';

@NgModule({
	imports: [
		CommonModule,
		CreativeRoutingModule,
		NgbModule
	],
	declarations: [AppheaderComponent, AppcontentComponent, AppfooterComponent],
	exports: [
		AppheaderComponent,
		AppcontentComponent,
		AppfooterComponent
	]
})
export class CreativeModule { }
