import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoryComponent } from './repository/repository.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { ContributorComponent } from './contributor/contributor.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    RepositoryComponent,
    ContributorsComponent,
    ContributorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
