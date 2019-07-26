import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  LoginForm=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  LoginFormSubmit(form){
    console.log(form);
    if(form.username=="opasha" && form.password=="tulasi123"){
      sessionStorage.setItem('IsLogin','true');
      this.router.navigateByUrl('admin/home')
    }else{
      Swal.fire('You Are not Aurthorised User')
    }
  }
}
