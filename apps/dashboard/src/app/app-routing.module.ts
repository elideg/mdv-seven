import { ProjectCreateItemComponent } from './project/project-create-item/project-create-item.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  { path: 'projects', children: [
    { path: '', component: ProjectComponent},
    { path: ':id', component: ProjectDetailsComponent },
  ]},
  { path: 'create', component: ProjectCreateItemComponent },
  { path: '', component: LoginComponent },
  { path: '404', component: WildcardComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
