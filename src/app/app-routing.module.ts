import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleAppComponent} from './simple-app/simple-app.component'
import {SimpleApp2Component} from './simple-app2/simple-app2.component'
import {MainPageComponent} from './main-page/main-page.component'
import { FlaskEmailComponent } from './flask-email/flask-email.component';
import { SimpleApp3Component } from './simple-app3/simple-app3.component';
import { DashboardComponent } from './Oauth/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'flask',
    component: SimpleApp2Component,
    children: [
      {
        path: 'flask-email',
        component: FlaskEmailComponent
      },
    ]
  },
  {
    path: 'nodejs',
    component: SimpleAppComponent
  },
  {
    path: 'flaskemail',
    component: FlaskEmailComponent
  },
  {
    path: 'webapi',
    component: SimpleApp3Component
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
