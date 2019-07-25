import { Component, OnInit } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';
import * as Survey from 'survey-angular';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  getProducts() : Observable<any> {
    var response;
    // ...using get request
   this.route.paramMap.subscribe(r=>{
    response = r.get('id');
    
    })
    return response;
    
  
       // ...and calling .json() on the response to return data
      
}
  UserID: Observable<string>;
  constructor(private route:ActivatedRoute,private http:HttpClient,private arout:Router) { 
    // this.UserID=this.route.snapshot.paramMap.get('id')
   this.route.paramMap.subscribe(r=>{
     
   })
  }
 userID 
  
  ngOnInit() { 
    // this.UserID =this.route.snapshot.paramMap.get('id')
    this.userID=this.getProducts();
    console.log(this.userID)
      var json = {
    pages: [
    {
    name: "q1",
    title: "मैं बहुत जल्दी थक जाता/जाती हूं ?",
    elements: [
    { type: "radiogroup",choices: [
      { value: 2, text: "सदैव"},
      { value: 1, text: "कभी कभी"},
      { value: 0, text: "कभी नहीं"}
          ],isRequired:true}
    ]
    },
    {
      name: "q2",
      title: "मै अक्सर बीमार रहता/रहती हूं ?",
      elements: [
      { type: "radiogroup",choices: [
        { value: 2, text: "सदैव"},
        { value: 1, text: "कभी कभी"},
        { value: 0, text: "कभी नहीं"}
            ],isRequired:true}
      ]
      },
      {
        name: "q3",
        title: "मैं अपने स्वस्थ्य के बारें मैं बहुत परेशान रहता/रहती हूँ ?",
        elements: [
        { type: "radiogroup",choices: [
          { value: 2, text: "सदैव"},
          { value: 1, text: "कभी कभी"},
          { value: 0, text: "कभी नहीं"}
              ],isRequired:true}
        ]
        },
        {
          name: "q4",
          title: "मुझे भूख कम लगती है ?",
          elements: [
          { type: "radiogroup",choices: [
            { value: 2, text: "सदैव"},
            { value: 1, text: "कभी कभी"},
            { value: 0, text: "कभी नहीं"}
                ],isRequired:true}
          ]
          },
          {
            name: "q5",
            title: "मुझे कब्ज की शिकायत रहती हैं ?",
            elements: [
            { type: "radiogroup",choices: [
              { value: 2, text: "सदैव"},
              { value: 1, text: "कभी कभी"},
              { value: 0, text: "कभी नहीं"}
                  ],isRequired:true}
            ]
            },
            {
              name: "q6",
              title: "मुझे अक्सर सिरदर्द रहता हैं  ?",
              elements: [
              { type: "radiogroup",choices: [
                { value: 2, text: "सदैव"},
                { value: 1, text: "कभी कभी"},
                { value: 0, text: "कभी नहीं"}
                    ],isRequired:true}
              ]
              },
              {
                name: "q7",
                title: "मुझे सर्दी झुकाम जल्दी हो जाता हैं  ?",
                elements: [
                { type: "radiogroup",choices: [
                  { value: 2, text: "सदैव"},
                  { value: 1, text: "कभी कभी"},
                  { value: 0, text: "कभी नहीं"}
                      ],isRequired:true}
                ]
                },
                {
                  name: "q8",
                  title: "मुझे बार बार अपना गला साफ़ करना पड़ता हैं  ?",
                  elements: [
                  { type: "radiogroup",choices: [
                    { value: 2, text: "सदैव"},
                    { value: 1, text: "कभी कभी"},
                    { value: 0, text: "कभी नहीं"}
                        ],isRequired:true}
                  ]
                  },
                  {
                    name: "q9",
                    title: "मुझे प्र्राय चक्कर आते हैं ?",
                    elements: [
                    { type: "radiogroup",choices: [
                      { value: 2, text: "सदैव"},
                      { value: 1, text: "कभी कभी"},
                      { value: 0, text: "कभी नहीं"}
                          ],isRequired:true}
                    ]
                    },
                    {
                      name: "q10",
                      title: "मुझे बार बार पेशाब करने जाना पड़ता हैं  ?",
                      elements: [
                      { type: "radiogroup",choices: [
                        { value: 2, text: "सदैव"},
                        { value: 1, text: "कभी कभी"},
                        { value: 0, text: "कभी नहीं"}
                            ],isRequired:true}
                      ]
                      },
                      {
                        name: "q11",
                        title: "मुझे नींद देर से आती हैं  ?",
                        elements: [
                        { type: "radiogroup",choices: [
                          { value: 2, text: "सदैव"},
                          { value: 1, text: "कभी कभी"},
                          { value: 0, text: "कभी नहीं"}
                              ],isRequired:true}
                        ]
                        },
                        {
                          name: "q12",
                          title: "मेरी सांस फुल जाती हैं ?",
                          elements: [
                          { type: "radiogroup",choices: [
                            { value: 2, text: "सदैव"},
                            { value: 1, text: "कभी कभी"},
                            { value: 0, text: "कभी नहीं"}
                                ],isRequired:true}
                          ]
                          },
                          {
                            name: "q13",
                            title: "मेरा पेट अक्सर खराब रहता हैं ?",
                            elements: [
                            { type: "radiogroup",choices: [
                              { value: 2, text: "सदैव"},
                              { value: 1, text: "कभी कभी"},
                              { value: 0, text: "कभी नहीं"}
                                  ],isRequired:true}
                            ]
                            },
                            {
                              name: "q14",
                              title: "मेरा दिल अक्सर जोर-जोर से धड़कने लगता हैं  ?",
                              elements: [
                              { type: "radiogroup",choices: [
                                { value: 2, text: "सदैव"},
                                { value: 1, text: "कभी कभी"},
                                { value: 0, text: "कभी नहीं"}
                                    ],isRequired:true}
                              ]
                              },
                              {
                                name: "q15",
                                title: "मेरे शरीर में दर्द रहता हैं ?",
                                elements: [
                                { type: "radiogroup",choices: [
                                  { value: 2, text: "सदैव"},
                                  { value: 1, text: "कभी कभी"},
                                  { value: 0, text: "कभी नहीं"}
                                      ],isRequired:true}
                                ]
                                },{
                                  name: "q16",
                                  title: "मेरी शौच में कीड़े निकलते हैं ?",
                                  elements: [
                                  { type: "radiogroup",choices: [
                                    { value: 2, text: "सदैव"},
                                    { value: 1, text: "कभी कभी"},
                                    { value: 0, text: "कभी नहीं"}
                                        ],isRequired:true}
                                  ]
                                  },
                                  {
                                    name: "q17",
                                    title: "मैं शर्मीले स्वभाव का/की हूँ ?",
                                    elements: [
                                    { type: "radiogroup",choices: [
                                      { value: 2, text: "सत्य"},
                                      { value: 1, text: "कुछ कुछ सत्य"},
                                      { value: 0, text: "असत्य"}
                                          ],isRequired:true}
                                    ]
                                    },
                                    {
                                      name: "q18",
                                      title: "मैं बात का जल्दी बुरा मान जाता/जाती हूँ  ?",
                                      elements: [
                                      { type: "radiogroup",choices: [
                                        { value: 2, text: "सत्य"},
                                        { value: 1, text: "कुछ कुछ सत्य"},
                                        { value: 0, text: "असत्य"}
                                            ],isRequired:true}
                                      ]
                                      },
                                      {
                                        name: "q19",
                                        title: "मैं छोटी-छोटी बातों से घबरा जाता/जाती हूँ ?",
                                        elements: [
                                        { type: "radiogroup",choices: [
                                          { value: 2, text: "सत्य"},
                                          { value: 1, text: "कुछ कुछ सत्य"},
                                          { value: 0, text: "असत्य"}
                                              ],isRequired:true}
                                        ]
                                        },
                                        {
                                          name: "q20",
                                          title: "मैं बहुत चिंता करता/करती हूँ  ?",
                                          elements: [
                                          { type: "radiogroup",choices: [
                                            { value: 2, text: "सत्य"},
                                            { value: 1, text: "कुछ कुछ सत्य"},
                                            { value: 0, text: "असत्य"}
                                                ],isRequired:true}
                                          ]
                                          },{
                                            name: "q21",
                                            title: "मैं सामान्यतया: हर काम के लिए दूसरों की राय मांगता /मांगती हूँ ?",
                                            elements: [
                                            { type: "radiogroup",choices: [
                                              { value: 2, text: "सत्य"},
                                              { value: 1, text: "कुछ कुछ सत्य"},
                                              { value: 0, text: "असत्य"}
                                                  ],isRequired:true}
                                            ]
                                            },{
                                              name: "q22",
                                              title: "मैं किसी बात का जल्दी फैसला नहीं कर पता/पाती हूँ ?",
                                              elements: [
                                              { type: "radiogroup",choices: [
                                                { value: 2, text: "सत्य"},
                                                { value: 1, text: "कुछ कुछ सत्य"},
                                                { value: 0, text: "असत्य"}
                                                    ],isRequired:true}
                                              ]
                                              },{
                                                name: "q23",
                                                title: "मैं थोड़ी-सी नुक्ताचीनी(आलोचना) बहुत परेशान हो जाता/जाती हूँ  ?",
                                                elements: [
                                                { type: "radiogroup",choices: [
                                                  { value: 2, text: "सत्य"},
                                                  { value: 1, text: "कुछ कुछ सत्य"},
                                                  { value: 0, text: "असत्य"}
                                                      ],isRequired:true}
                                                ]
                                                },{
                                                  name: "q24",
                                                  title: "अगर काम जल्दी करना हो तो मैं घबरा जाता/जाती हूँ ?",
                                                  elements: [
                                                  { type: "radiogroup",choices: [
                                                    { value: 2, text: "सत्य"},
                                                    { value: 1, text: "कुछ कुछ सत्य"},
                                                    { value: 0, text: "असत्य"}
                                                        ],isRequired:true}
                                                  ]
                                                  },
                                                  {
                                                    name: "q25",
                                                    title: "मैं जानबूझकर धीरे धीरे काम करता/करती हूँ ताकि काम गलत न हो जायें  ?",
                                                    elements: [
                                                    { type: "radiogroup",choices: [
                                                      { value: 2, text: "सत्य"},
                                                      { value: 1, text: "कुछ कुछ सत्य"},
                                                      { value: 0, text: "असत्य"}
                                                          ],isRequired:true}
                                                    ]
                                                    },
                                                    {
                                                      name: "q26",
                                                      title: "मैं नए लोगो से मिलने या नयी जगह जाने से घबड़ा जाता/जाती हूँ  ?",
                                                      elements: [
                                                      { type: "radiogroup",choices: [
                                                        { value: 2, text: "सत्य"},
                                                                                { value: 1, text: "कुछ कुछ सत्य"},
                                                                                { value: 0, text: "असत्य"}
                                                            ],isRequired:true}
                                                      ]
                                                      },
                                                      {
                                                        name: "q27",
                                                        title: "मैं अक्सर उदास रहता/रहती हूँ ?",
                                                        elements: [
                                                        { type: "radiogroup",choices: [
                                                          { value: 2, text: "सत्य"},
                                                          { value: 1, text: "कुछ कुछ सत्य"},
                                                          { value: 0, text: "असत्य"}
                                                              ],isRequired:true}
                                                        ]
                                                        },
                                                        {
                                                          name: "q28",
                                                          title: "मैं जल्दी से रो पड़ता/पड़ती हूँ?",
                                                          elements: [
                                                          { type: "radiogroup",choices: [
                                                            { value: 2, text: "सत्य"},
                                                            { value: 1, text: "कुछ कुछ सत्य"},
                                                            { value: 0, text: "असत्य"}
                                                                ],isRequired:true}
                                                          ]
                                                          },
                                                          {
                                                            name: "q29",
                                                            title: "में निराशा में हताश हो जाता/जाती हूँ ?",
                                                            elements: [
                                                            { type: "radiogroup",choices: [
                                                              { value: 2, text: "सत्य"},
                                                                                { value: 1, text: "कुछ कुछ सत्य"},
                                                                                { value: 0, text: "असत्य"}
                                                                  ],isRequired:true}
                                                            ]
                                                            },
                                                            {
                                                              name: "q30",
                                                              title: "मैं जोर की आवाज से डर जाता/जाती हूँ  ?",
                                                              elements: [
                                                              { type: "radiogroup",choices: [
                                                                { value: 2, text: "सत्य"},
                                                                { value: 1, text: "कुछ कुछ सत्य"},
                                                                { value: 0, text: "असत्य"}
                                                                    ],isRequired:true}
                                                              ]
                                                              },
                                                              {
                                                                name: "q31",
                                                                title: "अचानक कोई मेरे सामने आ जायें तो मैं घबड़ा जाता/जाती हूँ ?",
                                                                elements: [
                                                                { type: "radiogroup",choices: [
                                                                  { value: 2, text: "सत्य"},
                                                                                { value: 1, text: "कुछ कुछ सत्य"},
                                                                                { value: 0, text: "असत्य"}
                                                                      ],isRequired:true}
                                                                ]
                                                                },
                                                                {
                                                                  name: "q32",
                                                                  title: "किसी अफसर/बड़े आदमी के सामने मुझे पसीना आने लगता हैं  ?",
                                                                  elements: [
                                                                  { type: "radiogroup",choices: [
                                                                    { value: 2, text: "सत्य"},
                                                                                { value: 1, text: "कुछ कुछ सत्य"},
                                                                                { value: 0, text: "असत्य"}
                                                                        ],isRequired:true}
                                                                  ]
                                                                  },
                                                                  {
                                                                    name: "q33",
                                                                    title: "मैं शीघ्र चिडचिडा जाता/जाती हूँ?",
                                                                    elements: [
                                                                    { type: "radiogroup",choices: [
                                                                      { value: 2, text: "सत्य"},
                                                                                { value: 1, text: "कुछ कुछ सत्य"},
                                                                                { value: 0, text: "असत्य"}
                                                                          ],isRequired:true}
                                                                    ]
                                                                    },
                                                                    {
                                                                      name: "q34",
                                                                      title: "मुझे गुस्सा जल्दी आता हैं ?",
                                                                      elements: [
                                                                      { type: "radiogroup",choices: [
                                                                        { value: 2, text: "सत्य"},
                                                                                { value: 1, text: "कुछ कुछ सत्य"},
                                                                                { value: 0, text: "असत्य"}
                                                                            ],isRequired:true}
                                                                      ]
                                                                      },
                                                                      {
                                                                        name: "q35",
                                                                        title: "मुझे अँधेरे से डर लगता हैं?",
                                                                        elements: [
                                                                        { type: "radiogroup",choices: [
                                                                          { value: 2, text: "सत्य"},
                                                                          { value: 1, text: "कुछ कुछ सत्य"},
                                                                          { value: 0, text: "असत्य"}
                                                                              ],isRequired:true}
                                                                        ]
                                                                        },
                                                                        {
                                                                          name: "q36",
                                                                          title: "मुझे डरावने स्वप्न आते हैं ?",
                                                                          elements: [
                                                                          { type: "radiogroup",choices: [
                                                                            { value: 2, text: "सत्य"},
                                                                                { value: 1, text: "कुछ कुछ सत्य"},
                                                                                { value: 0, text: "असत्य"}
                                                                                ],isRequired:true}
                                                                          ]
                                                                          },
                                                                          {
                                                                            name: "q37",
                                                                            title: "मुझे जिंदगी बेकार (फिजूल) लगती हैं ?",
                                                                            elements: [
                                                                            { type: "radiogroup",choices: [
                                                                              { value: 2, text: "सत्य"},
                                                                                { value: 1, text: "कुछ कुछ सत्य"},
                                                                                { value: 0, text: "असत्य"}
                                                                                  ],isRequired:true}
                                                                            ]
                                                                            },
                                                                            {
                                                                              name: "q38",
                                                                              title: "ऐसी जिंदगी से तो मौत अच्छी हैं ?",
                                                                              elements: [
                                                                              { type: "radiogroup",choices: [
                                                                                { value: 2, text: "सत्य"},
                                                                                { value: 1, text: "कुछ कुछ सत्य"},
                                                                                { value: 0, text: "असत्य"}
                                                                                    ],isRequired:true}
                                                                              ]
                                                                              }
                                                                                ]
    
    }
    var survey = new Survey.Survey(json);
    survey.onComplete.add((sender,options)=>{
      console.log(sender.data);
      console.log(options)
      this.http.post('/api/user/firstsurvey',{data:sender.data,uid:this.userID}).subscribe(this.firstSurveyCall)
    })
    Survey.SurveyNG.render("surveyElement", {model:survey});
    
  }
  firstSurveyCall=(dt)=>{
    console.log(dt);
    this.arout.navigate(['survey2',{id:dt.user_id}])
  }
  
  
}