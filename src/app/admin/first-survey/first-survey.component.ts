import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-survey',
  templateUrl: './first-survey.component.html',
  styleUrls: ['./first-survey.component.css']
})
export class FirstSurveyComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getFirstSurveyData();
  }
  getFirstSurveyData(){
    this.http.get('/api/user/getFirstSurveyData').subscribe(this.cb)
  }
  Survey1Details;
  cb=(dt)=>{
    console.log(dt);
    this.Survey1Details=(dt);
  }

}
