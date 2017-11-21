import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const myProjectRoutes: Routes = [
  {
    path: 'my-project',
    component: NavigationComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'first-page',
        component: FirstPageComponent
      },
      {
        path: 'second-page',
        component: SecondPageComponent
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
