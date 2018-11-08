import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValleysComponent } from './valleys/valleys.component';
import { ViewValleyInfoComponent } from './view-valley-info/view-valley-info.component';
import { AddOrUpdateValleyComponent } from './add-or-update-valley/add-or-update-valley.component';
import { ValleysService } from './valleys.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import * as _ from 'lodash';

const appRoutes: Routes = [
  { path: '', component: ValleysComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ValleysComponent,
    ViewValleyInfoComponent,
    AddOrUpdateValleyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ValleysService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
