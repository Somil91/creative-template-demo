import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreativeComponent } from './creative.component';
import { ErrorComponent } from './error/error.component';




const routes: Routes = [
	{ path: 'home', component: CreativeComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: ErrorComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [
		RouterModule,
	]
})
export class CreativeRoutingModule { }
