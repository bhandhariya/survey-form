import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  registerSurvey(){
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
    console.log(obj)
    this.http.post('/api/user/create',obj).subscribe(this.cb)
  }
cb=(dt)=>{
  console.log(dt)
  if(dt._id){
    this.router.navigate(['survey',{id:dt._id}])
  }
}
adminLogin(){
  this.router.navigate(['admin']) 
}
}
