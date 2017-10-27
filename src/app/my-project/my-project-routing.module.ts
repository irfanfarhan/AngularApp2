import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FirstPageComponent } from './components/first-page/first-page.component';

const myProjectRoutes: Routes = [
  {
    path: 'my-project',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: FirstPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(myProjectRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MyProjectRoutingModule { }
