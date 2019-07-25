import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginService } from './service/login.service';
import { UserComponent } from './user/user.component';

const AppRoutes: Routes = [
  { path : '', component : AdminComponent },
  { path : 'home', component : HomeComponent,canActivate:[LoginService] },
  { path : 'user', component : UserComponent,canActivate:[LoginService] },
  { path : '**', redirectTo :'', pathMatch : 'full'}
];

@NgModule({
  declarations: [AdminComponent, HomeComponent, UserComponent],
  imports: [
    CommonModule,FormsModule,HttpClientModule,ReactiveFormsModule,
    RouterModule.forChild(AppRoutes)
  ],
  providers:[
    LoginService
  ]
})
export class AdminModule { }
