import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-survey2',
  templateUrl: './survey2.component.html',
  styleUrls: ['./survey2.component.css']
})
export class Survey2Component implements OnInit {
  UID;result;
  constructor(private arout:ActivatedRoute,private http:HttpClient,private router:Router) { 
    this.arout.paramMap.subscribe(r=>{
      this.UID=r.get('id')
    })
  }

  ngOnInit() {
    this.arout.paramMap.subscribe((r=>{
      this.UID=r.get('id');
      console.log(this.UID);
    }))
  }


  Survey2Form=new FormGroup({
    q1:new FormControl('',Validators.required),
    q2:new FormControl('',Validators.required),
    q3:new FormControl('',Validators.required),
    q4:new FormControl('',Validators.required),
    q5:new FormControl('',Validators.required),
    q6:new FormControl('',Validators.required),
    q7:new FormControl('',Validators.required),
    q8:new FormControl('',Validators.required),
    q9:new FormControl('',Validators.required),
    q10:new FormControl('',Validators.required)
  })

  Survey2FormSubmit(r){
   if(this.Survey2Form.valid){
    r.uid=this.UID;
    console.log(r)
   this.http.post('/api/user/survey2',r).subscribe(this.cb) 
   }
  }
  cb=(dt)=>{
    this.result=JSON.parse(dt.q1)+JSON.parse(dt.q2)+JSON.parse(dt.q3)+JSON.parse(dt.q4)+JSON.parse(dt.q5)+JSON.parse(dt.q6)+JSON.parse(dt.q7)+JSON.parse(dt.q8)+JSON.parse(dt.q9)+JSON.parse(dt.q10);
    
    if(this.result>1){
      Swal.fire('आपको एक योग्य मानसिक स्वास्थ्य चिकित्सक से मिलने की सलाह दी जाती है।')
      this.Survey2Form.reset({})
      this.router.navigate([''])
    }else{
      Swal.fire('Done')
      this.Survey2Form.reset({})
      this.router.navigate([''])
    }
  }
}
