import { Component, Input, Output, EventEmitter,OnInit  } from '@angular/core';
import * as SurveyEditor from 'surveyjs-editor';
import * as Survey from 'survey-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'formapp';
  ngOnInit(){
    var json = {
      pages: [
      {
      name: "q1",
      title: "मैं बहुत जल्दी थक जाता/जाती हूं ?",
      elements: [
      { type: "radiogroup",choices: [
        { value: 1, text: "सदैव"},
        { value: 2, text: "कभी कभी"},
        { value: 3, text: "कभी नहीं"}
            ]}
      ]
      },
      {
        name: "q2",
        title: "मै अक्सर बीमार रहता/रहती हूं ?",
        elements: [
        { type: "radiogroup",choices: [
          { value: 1, text: "सदैव"},
          { value: 2, text: "कभी कभी"},
          { value: 3, text: "कभी नहीं"}
              ]}
        ]
        },
        {
          name: "q3",
          title: "ममैं अपने स्वस्थ्य के बारें मैं बहुत परेशान रहता/रहती हूँ ?",
          elements: [
          { type: "radiogroup",choices: [
            { value: 1, text: "सदैव"},
            { value: 2, text: "कभी कभी"},
            { value: 3, text: "कभी नहीं"}
                ]}
          ]
          },
          {
            name: "q4",
            title: "मुझे भूख कम लगती है ?",
            elements: [
            { type: "radiogroup",choices: [
              { value: 1, text: "सदैव"},
              { value: 2, text: "कभी कभी"},
              { value: 3, text: "कभी नहीं"}
                  ]}
            ]
            },
            {
              name: "q5",
              title: "ममुझे कब्ज की शिकायत रहती हैं ?",
              elements: [
              { type: "radiogroup",choices: [
                { value: 1, text: "सदैव"},
                { value: 2, text: "कभी कभी"},
                { value: 3, text: "कभी नहीं"}
                    ]}
              ]
              },
              {
                name: "q6",
                title: "मुझे अक्सर सिरदर्द रहता हैं  ?",
                elements: [
                { type: "radiogroup",choices: [
                  { value: 1, text: "सदैव"},
                  { value: 2, text: "कभी कभी"},
                  { value: 3, text: "कभी नहीं"}
                      ]}
                ]
                },
                {
                  name: "q7",
                  title: "मुझे सर्दी झुकाम जल्दी हो जाता हैं  ?",
                  elements: [
                  { type: "radiogroup",choices: [
                    { value: 1, text: "सदैव"},
                    { value: 2, text: "कभी कभी"},
                    { value: 3, text: "कभी नहीं"}
                        ]}
                  ]
                  },
                  {
                    name: "q8",
                    title: "मुझे बार बार अपना गला साफ़ करना पड़ता हैं  ?",
                    elements: [
                    { type: "radiogroup",choices: [
                      { value: 1, text: "सदैव"},
                      { value: 2, text: "कभी कभी"},
                      { value: 3, text: "कभी नहीं"}
                          ]}
                    ]
                    },
                    {
                      name: "q9",
                      title: "मुझे प्र्राय चक्कर आते हैं ?",
                      elements: [
                      { type: "radiogroup",choices: [
                        { value: 1, text: "सदैव"},
                        { value: 2, text: "कभी कभी"},
                        { value: 3, text: "कभी नहीं"}
                            ]}
                      ]
                      },
                      {
                        name: "q10",
                        title: "मुझे बार बार पेशाब करने जाना पड़ता हैं  ?",
                        elements: [
                        { type: "radiogroup",choices: [
                          { value: 1, text: "सदैव"},
                          { value: 2, text: "कभी कभी"},
                          { value: 3, text: "कभी नहीं"}
                              ]}
                        ]
                        },
                        {
                          name: "q11",
                          title: "मुझे नींद देर से आती हैं  ?",
                          elements: [
                          { type: "radiogroup",choices: [
                            { value: 1, text: "सदैव"},
                            { value: 2, text: "कभी कभी"},
                            { value: 3, text: "कभी नहीं"}
                                ]}
                          ]
                          },
                          {
                            name: "q12",
                            title: "मेरी सांस फुल जाती हैं ?",
                            elements: [
                            { type: "radiogroup",choices: [
                              { value: 1, text: "सदैव"},
                              { value: 2, text: "कभी कभी"},
                              { value: 3, text: "कभी नहीं"}
                                  ]}
                            ]
                            },
                            {
                              name: "q13",
                              title: "मेरा पेट अक्सर खराब रहता हैं ?",
                              elements: [
                              { type: "radiogroup",choices: [
                                { value: 1, text: "सदैव"},
                                { value: 2, text: "कभी कभी"},
                                { value: 3, text: "कभी नहीं"}
                                    ]}
                              ]
                              },
                              {
                                name: "q14",
                                title: "मेरा दिल अक्सर जोर-जोर से धड़कने लगता हैं  ?",
                                elements: [
                                { type: "radiogroup",choices: [
                                  { value: 1, text: "सदैव"},
                                  { value: 2, text: "कभी कभी"},
                                  { value: 3, text: "कभी नहीं"}
                                      ]}
                                ]
                                },
                                {
                                  name: "q15",
                                  title: "मेरे शरीर में दर्द रहता हैं ?",
                                  elements: [
                                  { type: "radiogroup",choices: [
                                    { value: 1, text: "सदैव"},
                                    { value: 2, text: "कभी कभी"},
                                    { value: 3, text: "कभी नहीं"}
                                        ]}
                                  ]
                                  },{
                                    name: "q16",
                                    title: "मेरी शौच में कीड़े निकलते हैं ?",
                                    elements: [
                                    { type: "radiogroup",choices: [
                                      { value: 1, text: "सदैव"},
                                      { value: 2, text: "कभी कभी"},
                                      { value: 3, text: "कभी नहीं"}
                                          ]}
                                    ]
                                    },
                                    {
                                      name: "q17",
                                      title: "मैं शर्मीले स्वभाव का/की हूँ ?",
                                      elements: [
                                      { type: "radiogroup",choices: [
                                        { value: 1, text: "सत्य"},
                                        { value: 2, text: "कुछ कुछ सत्य"},
                                        { value: 3, text: "असत्य"}
                                            ]}
                                      ]
                                      },
                                      {
                                        name: "q18",
                                        title: "मैं बात का जल्दी बुरा मान जाता/जाती हूँ  ?",
                                        elements: [
                                        { type: "radiogroup",choices: [
                                          { value: 1, text: "सत्य"},
                                          { value: 2, text: "कुछ कुछ सत्य"},
                                          { value: 3, text: "असत्य"}
                                              ]}
                                        ]
                                        },
                                        {
                                          name: "q19",
                                          title: "मैं छोटी-छोटी बातों से घबरा जाता/जाती हूँ ?",
                                          elements: [
                                          { type: "radiogroup",choices: [
                                            { value: 1, text: "सत्य"},
                                            { value: 2, text: "कुछ कुछ सत्य"},
                                            { value: 3, text: "असत्य"}
                                                ]}
                                          ]
                                          },
                                          {
                                            name: "q20",
                                            title: "मैं बहुत चिंता करता/करती हूँ  ?",
                                            elements: [
                                            { type: "radiogroup",choices: [
                                              { value: 1, text: "सत्य"},
                                              { value: 2, text: "कुछ कुछ सत्य"},
                                              { value: 3, text: "असत्य"}
                                                  ]}
                                            ]
                                            },{
                                              name: "q21",
                                              title: "मैं सामान्यतया: हर काम के लिए दूसरों की राय मांगता /मांगती हूँ ?",
                                              elements: [
                                              { type: "radiogroup",choices: [
                                                { value: 1, text: "सत्य"},
                                                { value: 2, text: "कुछ कुछ सत्य"},
                                                { value: 3, text: "असत्य"}
                                                    ]}
                                              ]
                                              },{
                                                name: "q22",
                                                title: "मैं किसी बात का जल्दी फैसला नहीं कर पता/पाती हूँ ?",
                                                elements: [
                                                { type: "radiogroup",choices: [
                                                  { value: 1, text: "सत्य"},
                                                  { value: 2, text: "कुछ कुछ सत्य"},
                                                  { value: 3, text: "असत्य"}
                                                      ]}
                                                ]
                                                },{
                                                  name: "q23",
                                                  title: "मैं थोड़ी-सी नुक्ताचीनी(आलोचना) बहुत परेशान हो जाता/जाती हूँ  ?",
                                                  elements: [
                                                  { type: "radiogroup",choices: [
                                                    { value: 1, text: "सत्य"},
                                                    { value: 2, text: "कुछ कुछ सत्य"},
                                                    { value: 3, text: "असत्य"}
                                                        ]}
                                                  ]
                                                  },{
                                                    name: "q24",
                                                    title: "अगर काम जल्दी करना हो तो मैं घबरा जाता/जाती हूँ ?",
                                                    elements: [
                                                    { type: "radiogroup",choices: [
                                                      { value: 1, text: "सत्य"},
                                                      { value: 2, text: "कुछ कुछ सत्य"},
                                                      { value: 3, text: "असत्य"}
                                                          ]}
                                                    ]
                                                    },
                                                    {
                                                      name: "q25",
                                                      title: "मैं जानबूझकर धीरे धीरे काम करता/करती हूँ ताकि काम गलत न हो जायें  ?",
                                                      elements: [
                                                      { type: "radiogroup",choices: [
                                                        { value: 1, text: "सत्य"},
                                                        { value: 2, text: "कुछ कुछ सत्य"},
                                                        { value: 3, text: "असत्य"}
                                                            ]}
                                                      ]
                                                      },
                                                      {
                                                        name: "q26",
                                                        title: "मैं नए लोगो से मिलने या नयी जगह जाने से घबड़ा जाता/जाती हूँ  ?",
                                                        elements: [
                                                        { type: "radiogroup",choices: [
                                                          { value: 1, text: "सत्य"},
                                                                                  { value: 2, text: "कुछ कुछ सत्य"},
                                                                                  { value: 3, text: "असत्य"}
                                                              ]}
                                                        ]
                                                        },
                                                        {
                                                          name: "q27",
                                                          title: "मैं अक्सर उदास रहता/रहती हूँ ?",
                                                          elements: [
                                                          { type: "radiogroup",choices: [
                                                            { value: 1, text: "सत्य"},
                                                            { value: 2, text: "कुछ कुछ सत्य"},
                                                            { value: 3, text: "असत्य"}
                                                                ]}
                                                          ]
                                                          },
                                                          {
                                                            name: "q28",
                                                            title: "मैं जल्दी से रो पड़ता/पड़ती हूँ?",
                                                            elements: [
                                                            { type: "radiogroup",choices: [
                                                              { value: 1, text: "सत्य"},
                                                              { value: 2, text: "कुछ कुछ सत्य"},
                                                              { value: 3, text: "असत्य"}
                                                                  ]}
                                                            ]
                                                            },
                                                            {
                                                              name: "q29",
                                                              title: "में निराशा में हताश हो जाता/जाती हूँ ?",
                                                              elements: [
                                                              { type: "radiogroup",choices: [
                                                                { value: 1, text: "सत्य"},
                                                                                  { value: 2, text: "कुछ कुछ सत्य"},
                                                                                  { value: 3, text: "असत्य"}
                                                                    ]}
                                                              ]
                                                              },
                                                              {
                                                                name: "q30",
                                                                title: "मैं जोर की आवाज से डर जाता/जाती हूँ  ?",
                                                                elements: [
                                                                { type: "radiogroup",choices: [
                                                                  { value: 1, text: "सत्य"},
                                                                  { value: 2, text: "कुछ कुछ सत्य"},
                                                                  { value: 3, text: "असत्य"}
                                                                      ]}
                                                                ]
                                                                },
                                                                {
                                                                  name: "q31",
                                                                  title: "अचानक कोई मेरे सामने आ जायें तो मैं घबड़ा जाता/जाती हूँ ?",
                                                                  elements: [
                                                                  { type: "radiogroup",choices: [
                                                                    { value: 1, text: "सत्य"},
                                                                                  { value: 2, text: "कुछ कुछ सत्य"},
                                                                                  { value: 3, text: "असत्य"}
                                                                        ]}
                                                                  ]
                                                                  },
                                                                  {
                                                                    name: "q32",
                                                                    title: "किसी अफसर/बड़े आदमी के सामने मुझे पसीना आने लगता हैं  ?",
                                                                    elements: [
                                                                    { type: "radiogroup",choices: [
                                                                      { value: 1, text: "सत्य"},
                                                                                  { value: 2, text: "कुछ कुछ सत्य"},
                                                                                  { value: 3, text: "असत्य"}
                                                                          ]}
                                                                    ]
                                                                    },
                                                                    {
                                                                      name: "q33",
                                                                      title: "मैं शीघ्र चिडचिडा जाता/जाती हूँ?",
                                                                      elements: [
                                                                      { type: "radiogroup",choices: [
                                                                        { value: 1, text: "सत्य"},
                                                                                  { value: 2, text: "कुछ कुछ सत्य"},
                                                                                  { value: 3, text: "असत्य"}
                                                                            ]}
                                                                      ]
                                                                      },
                                                                      {
                                                                        name: "q34",
                                                                        title: "मुझे गुस्सा जल्दी आता हैं ?",
                                                                        elements: [
                                                                        { type: "radiogroup",choices: [
                                                                          { value: 1, text: "सत्य"},
                                                                                  { value: 2, text: "कुछ कुछ सत्य"},
                                                                                  { value: 3, text: "असत्य"}
                                                                              ]}
                                                                        ]
                                                                        },
                                                                        {
                                                                          name: "q35",
                                                                          title: "मुझे अँधेरे से डर लगता हैं?",
                                                                          elements: [
                                                                          { type: "radiogroup",choices: [
                                                                            { value: 1, text: "सत्य"},
                                                                            { value: 2, text: "कुछ कुछ सत्य"},
                                                                            { value: 3, text: "असत्य"}
                                                                                ]}
                                                                          ]
                                                                          },
                                                                          {
                                                                            name: "q36",
                                                                            title: "मुझे डरावने स्वप्न आते हैं ?",
                                                                            elements: [
                                                                            { type: "radiogroup",choices: [
                                                                              { value: 1, text: "सत्य"},
                                                                                  { value: 2, text: "कुछ कुछ सत्य"},
                                                                                  { value: 3, text: "असत्य"}
                                                                                  ]}
                                                                            ]
                                                                            },
                                                                            {
                                                                              name: "q37",
                                                                              title: "मुझे जिंदगी बेकार (फिजूल) लगती हैं ?",
                                                                              elements: [
                                                                              { type: "radiogroup",choices: [
                                                                                { value: 1, text: "सत्य"},
                                                                                  { value: 2, text: "कुछ कुछ सत्य"},
                                                                                  { value: 3, text: "असत्य"}
                                                                                    ]}
                                                                              ]
                                                                              },
                                                                              {
                                                                                name: "q38",
                                                                                title: "ऐसी जिंदगी से तो मौत अच्छी हैं ?",
                                                                                elements: [
                                                                                { type: "radiogroup",choices: [
                                                                                  { value: 1, text: "सत्य"},
                                                                                  { value: 2, text: "कुछ कुछ सत्य"},
                                                                                  { value: 3, text: "असत्य"}
                                                                                      ]}
                                                                                ]
                                                                                }
                                                                                  ]
      
      }
      var survey = new Survey.Survey(json);
      survey.onComplete.add(this.myfunc)
      Survey.SurveyNG.render("surveyElement", {model:survey});
  }
  myfunc(s){
    
    var dat=s.data;
console.log(dat)
  }
}
