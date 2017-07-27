import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroComponent} from 'app/hero/hero.component';
import { HeroDetailComponent} from 'app/hero/hero-detail.component';
import { HeroSearchComponent } from 'app/hero/hero-search.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { HeroService} from 'app/hero/hero.service'

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroSearchComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
