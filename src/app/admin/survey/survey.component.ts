import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
uid;data;
  constructor(private aroute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.aroute.paramMap.subscribe(r=>{
      this.uid=r.get('uid');
      console.log(this.uid)
    })
    this.getDataByUid(this.uid)
  }
  getDataByUid(r){
    var obj={
      id:r
    }
    this.http.post('https://form112.herokuapp.com/api/user/getdatabuID',obj).subscribe(this.cb)
    }
    cb=(dt)=>{
      console.log(dt);
      this.data=dt;
    }

}
