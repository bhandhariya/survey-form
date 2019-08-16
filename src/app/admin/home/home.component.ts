import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as saveAs from "file-saver";
import * as jsonexport from "jsonexport/dist"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.getSurveyCount();
  }
  logout(){
    sessionStorage.removeItem('IsLogin');
  }
  gotoAllUsers(){
this.router.navigateByUrl('admin/user')
  }
  gotoFirstSurvey(){
    this.router.navigateByUrl('admin/first')
  }
getSurveyCount(){
  this.http.get('https://form112.herokuapp.com/api/user/getCount').subscribe(this.cb)
}
UserCount;
SurveyCount1;
SurveyCount2;
cb=(dt)=>{
  console.log(dt)
  this.UserCount=dt.user;
  this.SurveyCount1=dt.s1;
  this.SurveyCount2=dt.s2

}
download(){
  this.http.get('https://form112.herokuapp.com/api/user/getAllUSers').subscribe(this.excelcb)
 
}
excelcb=(dt)=>{
  console.log(dt)
  jsonexport(dt,{verticalOutput:false},function(err, csv){
    if(err) return console.log(err);
    saveAs(new Blob([csv],{type:'text/json'}),'datdaata.csv')
    
});
}
}
