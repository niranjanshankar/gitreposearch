import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ContributorsComponent } from './contributors/contributors.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/repositories',
    pathMatch: 'full'
  },
  {
    path: 'repositories',
    component: RepositoriesComponent
  },
  {
    path: 'contributors/:owner/:repo',
    component: ContributorsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
