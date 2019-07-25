import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';
import { Survey2Component } from './survey2/survey2.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  { path : 'admin', loadChildren : './admin/admin.module#AdminModule'},
  {path:'survey',component:SurveyComponent},
  {path:'survey2',component:Survey2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
