import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }
  name;email;number;date;dob;sex;education;profession;maried;area;
  ngOnInit() {
  }
  SurverRegistrationForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl(''),
      number:new FormControl('',Validators.required),
      date:new FormControl(''),
      dob:new FormControl(''),
      sex:new FormControl(''),
      education:new FormControl(''),
      profession:new FormControl(''),
      maried:new FormControl(''),
      area:new FormControl('')
  })
  registerSurvey(r){
    var obj={
      name:this.name,
      email:this.email,
      number:this.number,
      date:this.date,
      dob:this.dob,
      sex:this.sex,
      education:this.education,
      profession:this.profession,
      maried:this.maried,
      area:this.area
    }
    if(this.SurverRegistrationForm.valid){
      console.log(r)
      this.http.post('/api/user/create',r).subscribe(this.cb)  
    }else{
      Swal.fire('Name And Number are Required')
    }

  }
cb=(dt)=>{
  console.log(dt)
  if(dt._id){
    this.router.navigate(['survey',{id:dt._id}])
  }else if(dt.code=11000){
    Swal.fire('this Number Is Already Taken')
  }
}
adminLogin(){
  this.router.navigate(['admin']) 
}
}
