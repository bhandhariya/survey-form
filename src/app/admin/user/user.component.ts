import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.getAllUsersData()
  }
getAllUsersData(){
  this.http.get('https://form112.herokuapp.com/api/user/getAllUSers').subscribe(this.cb)
}
cb=(dt)=>{
  console.log(dt)
  this.data=dt;
}
srurveyDetails(r){
  console.log(r)
  this.router.navigate(['admin/survey',{uid:r}])
}
getFirstSectionResult(r){
  console.log(r)
  if(r.question1){
    var i=(r.question1+r.question2+r.question3+r.question4+r.question5+r.question6+r.question7+r.question8+r.question9+r.question10+r.question11+r.question12+r.question13+r.question14+r.question15+r.question16)
    return i;
  }
}
getSecondSectionResult(r){
  console.log(r)
  if(r.question1){
    var i=(r.question17+r.question18+r.question19+r.question20+r.question21+r.question22+r.question23+r.question24+r.question25+r.question26+r.question27+r.question28+r.question29+r.question30+r.question31+r.question32+r.question33+r.question34+r.question35+r.question36+r.question37+r.question38)
    return i;
  }
}
getTotal(r){
  console.log(r)
  if(r.question1){
    var i=(r.question1+r.question2+r.question3+r.question4+r.question5+r.question6+r.question7+r.question8+r.question9+r.question10+r.question11+r.question12+r.question13+r.question14+r.question15+r.question16+r.question17+r.question18+r.question19+r.question20+r.question21+r.question22+r.question23+r.question24+r.question25+r.question26+r.question27+r.question28+r.question29+r.question30+r.question31+r.question32+r.question33+r.question34+r.question35+r.question36+r.question37+r.question38)
    return i;
  }
}
getsecondSureyDetails(r){
  console.log(r)
  if(r.q1){
    var i=(r.q1+r.q2+r.q3+r.q4+r.q5+r.q6+r.q7+r.q8+r.q9+r.q10);
  return i;
  }
}
UserDelete(id){
  console.log(id);
  // this.http.post('https://form112.herokuapp.com/api/user/deleteUserById',{id:id}).subscribe(r=>{
  //   console.log(r);
  //   this.getAllUsersData()
  // })

  Swal.fire({
    title: 'If you really Want to delete this please provide authentication token',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
     if(login=="JasJeet"){
      this.http.post('https://form112.herokuapp.com/api/user/deleteUserById',{id:id}).subscribe(this.cbb)
     }else{
       var r={
         value:'You are not aurthorised'
       }
       return r;
     }
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        title: result.value.value
        
      })
      console.log(result)
    }else{
      Swal.fire({
        title: 'Deleted Successfully'
        
      })
    }
  })

}
cbb=(r)=>{
  Swal.fire({
    title: 'Deleted Successfully'
    
  })
}
}
