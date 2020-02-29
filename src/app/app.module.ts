import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleAppComponent } from './simple-app/simple-app.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleApp2Component } from './simple-app2/simple-app2.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FlaskEmailComponent } from './flask-email/flask-email.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { SimpleApp3Component } from './simple-app3/simple-app3.component';
import { DashboardComponent } from './Oauth/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleAppComponent,
    SimpleApp2Component,
    MainPageComponent,
    FlaskEmailComponent,
    TopNewsComponent,
    SimpleApp3Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
