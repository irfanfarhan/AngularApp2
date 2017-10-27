import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MyProjectRoutingModule } from './my-project-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FirstPageComponent } from './components/first-page/first-page.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MyProjectRoutingModule
    ],
    declarations: [
    NavigationComponent,
    FirstPageComponent],
    entryComponents: [],
    providers: []
})
export class MyProjectModule { }
