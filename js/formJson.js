var formJson =
{
  "components":
   [
    {
      "input": false,
      "key": "mvn_FormPanelLayout_Pnl",
      "type": "panel",
      "class": " brdr-t-blue",
      "noPadding": true,
      "components":
       [
        {
          "input": false,
          "type": "table",
          "key": "hmo_Homeoxygen1_Tbl",
          "border": true,
          "numRows": 2,
          "numCols": 3,
          "rows":
           [
            [
              {
                "class": "width-34",
                "components":
                 [
                  {
                    "type": "textfield",
                    "key": "hmo_PatNam_Txt",
                    "label": "PatientName: "
                  }
                ]
              },
              {
                "class": "width-33",
                "components":
                 [
                  {
                    "type": "textfield",
                    "key": "hmo_MarketPrice_Txt",
                    "label": "MRP:",
                   
                  }
                ]
              },
              {
                "components":
                 [
                  {
                    "input": true,
                    "type": "datetime",
                    "key": "hmo_M3DOB_Txt",
                    "label": "DOB:&nbsp;",
                    "datePicker": 
                    {
                      "minDate": null,
                      "maxDate": null
                    }
                  }
                ]
              }
            ],
            [
              {
                
                "components":
                 [
                  {
                    "key": "hmo_Scorelikelihood_Cnt",
                    "type": "content",
                    "html": "Key (Risk) Score Likelihood:"
                  }
                ]
              },
              {
                
                "components":
                 [
                  {
                    "input": true,
                    "key": "hmo_Measure_Cnt",
                    "type": "content",
                    "html": "<fieldset>5=Certainly&nbsp;&nbsp;&nbsp;2=Unlikely<br>4=Likely &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1=Rare<br>3=Possible&nbsp;&nbsp;&nbsp;0=N/A</fieldset>"
                  }
                ]
              },
              {
                "components":
                 [
                  {
                    "input": true,
                    "type": "checkbox",
                    "key": "hmo_Soc_Chk",
                    "label": "Start of care"
                  },
                  {
                    "input": true,
                    "type": "datetime",
                    "key": "hmo_M4DOB_Txt",
                    "label": "&nbsp;",
                    "datePicker":
                     {
                      "minDate": null,
                      "maxDate": null
                     }
                  },
                  {
                    "input": true,
                    "type": "checkbox",
                    "key": "hmo_Roc_Chk",
                    "label": "Review of care"
                  },
                  {
                    "input": true,
                    "type": "datetime",
                    "key": "hmo_M5DOB_Txt",
                    "label": "&nbsp;",
                    "datePicker": 
                    {
                      "minDate": null,
                      "maxDate": null
                    }
                  },
                  {
                    "input": true,
                    "type": "checkbox",
                    "key": "hmo_Recert_Chk",
                    "label": "Recert"
                  },
                  {
                    "input": true,
                    "type": "datetime",
                    "key": "hmo_M6DOB_Txt",
                    "label": "&nbsp;",
                    "datePicker": 
                    {
                      "minDate": null,
                      "maxDate": null
                    }
                  },
                  {
                    "input": true,
                    "type": "checkbox",
                    "key": "hmo_PRN_Chk",
                    "label": "PRN Reason"
                  },
                  {
                    "type": "textfield",
                    "key": "hmo_PRN_txt",
                    "class": "large",
                    "label": " ",
                   
                  }
                ]
              }
            ]
          ]
        },
        {
          "input": false,
          "type": "table",
          "key": "hmo_Homeoxygen2_Tb2",
          "border": true,
          "numRows": 2,
          "numCols": 7,
          "rows":
           [
            [
              {
                "class": "width-5",
                "components":
                 [
                  {
                    "key": "hmo_Hash_Cnt",
                    "type": "content",
                    "html": "<b>#</b>"
                  }
                ]
              },
              {
                "class": "width-6",
                "components":
                 [
                  {
                    "key": "hmo_Hazards_Cnt",
                    "type": "content",
                    "html": "<b>Hazards</b>"
                  }
                ]
              },
              {
                "class": "width-16",
                "components":
                 [
                  {
                    "key": "hmo_Risks_Cnt",
                    "type": "content",
                    "html": "<b>Risks</b>"
                  }
                ]
              },
              {
                "class": "width-16",
                "components": 
                [
                  {
                    "key": "hmo_Score_Cnt",
                    "type": "content",
                    "html": "<b>Score</b>"
                  }
                ]
              },
              {
                "class": "width-16",
                "components": 
                [
                  {
                    "key": "hmo_Options_Cnt",
                    "type": "content",
                    "html": "<b>Is further action required?(Y/N)<br>(If score >3,answer Y:otherwise N)</b>"
                  }
                ]
              },
              {
                "class": "width-19",
                "components": 
                [
                  {
                    "key": "hmo_Actions_Cnt",
                    "type": "content",
                    "html": "<b>Actions<br>(Recommendation,Education etc)"
                  }
                ]
              },
              {
                "components": 
                [
                  {
                    "key": "hmo_Response_Cnt",
                    "type": "content",
                    "html": "<b>Response<br>A)Will correct<br>B)Need more teaching<br> C)Refuse"
                  }
                ]
              }
            ],
            [
              {
                "class": "width-16",
                "components": 
                [
                  {
                    "key": "hmo_Number1_Cnt",
                    "type": "content",
                    "html": "1."
                  }
                ]
              },
              {
                "class": "width-16",
                "components": 
                [
                  {
                    "key": "hmo_Hazards2_Cnt",
                    "type": "content",
                    "html": "smoking"
                  }
                ]
              },
              {
                "class": "width-16",
                "components": 
                [
                  {
                    "key": "hmo_Risks2_Cnt",
                    "type": "content",
                    "html": "&bull;fire<br>&bull;facial burns"
                  }
                ]
              },
              {
                "class": "width-16",
                "components": 
                [
                  {
                    "type": "radio",
                    "key": "hmo_MethodUsed_Rdo",
                    "clearable": true,
                    "values": 
                    [
                      {
                        "value": "0",
                        "label": "0"
                      },
                      {
                        "value": "1",
                        "label": "1"
                      },
                      {
                        "value": "2",
                        "label": "2"
                      },
                      {
                        "value": "3",
                        "label": "3"
                      },
                      {
                        "value": "4",
                        "label": "4"
                      },
                      {
                        "value": "5",
                        "label": "5"
                      }
                    ]
                  }
                ]
              },
              {
                "class": "width-16",
                "components":
                 [
                  {
                    "type": "radio",
                    "key": "hmo_MethodUsed2_Rdo",
                    "clearable": true,
                    "values": 
                    [
                      {
                        "value": "1",
                        "label": "Yes"
                      },
                      {
                        "value": "0",
                        "label": "No"
                      }
                    ]
                  }
                ]
              },
              {
                "components":
                [
                  {
                  "input": false,
                  "type": "table",
                   "key": "hmo_Homeoxygen3_Tb3",
                   "border": false,
                   "numRows": 5,
                   "numCols": 1,
                   "rows":
                 [   
                  [ 
                    {
                      "components":
                      [
                        {
                          "type": "checkbox",
                          "key": "hmo_INS_Chk",
                          "label": "Instruct patients,caregivers and visitors<br>not to smoke in any part of the house where <br>oxygen is used"
                        }
                      ]
                    }
                  ],
                  [ 
                    {
                      "components":
                       [
                        {
                          "type": "checkbox",
                          "key": "hmo_NS_Chk",
                          "label": "Post no smoking sign where oxygen is<br> used"
                         }
                       ]
                     }
                   ],
                   [ 
                    {
                      "components":
                       [
                        {
                         "type": "checkbox",
                         "key": "hmo_AR_Chk",
                         "label": "Arrange for removal of any oxygen<br>equipment not in use"
                         }
                       ]
                     }
                   ], 
                  [ 
                    {
                      "components":
                       [
                        {
                         "type": "checkbox",
                         "key": "hmo_FNS_Chk",
                         "label": "File breaks never to be removed from<br> tubing supplied by oxygen provideer"
                        }
                      ]
                    }
                  ],
                  [ 
                    {
                      "components":
                       [
                        {
                          "type": "checkbox",
                          "key": "hmo_SDF_Chk",
                          "label": "Ensure smoke detectors are fitted and working in order"
                         }
                        ]
                      }
                    ]
                  ]
                }
              ]
                  

                
               
              
               /* "components": 
                [
                  {
                    "type": "checkbox",
                    "key": "hmo_INS_Chk",
                    "label": "Instruct patients,caregivers and visitors<br>not to smoke in any part of the house where <br>oxygen is used"
                  },
                  {
                    "type": "checkbox",
                    "key": "hmo_NS_Chk",
                    "label": "Post no smoking sign where oxygen is<br> used"
                  },
                  {
                    "type": "checkbox",
                    "key": "hmo_AR_Chk",
                    "label": "Arrange for removal of any oxygen<br>equipment not in use"
                  },
                  {
                    "type": "checkbox",
                    "key": "hmo_FNS_Chk",
                    "label": "File breaks never to be removed from<br> tubing supplied by oxygen provideer"
                  },
                  {
                    "type": "checkbox",
                    "key": "hmo_SDF_Chk",
                    "label": "Ensure smoke detectors are fitted and working in order"
                  }
                ]*/ 
              },
              {
                "class": "width-16",
                "components":
                 [
                  {
                    "type": "radio",
                    "key": "hmo_MethodUsed3_Rdo",
                    "clearable": true,
                    "values":
                     [
                      {
                        "value": "0",
                        "label": "A"
                      },
                      {
                        "value": "1",
                        "label": "B"
                      },
                      {
                        "value": "2",
                        "label": "C"
                      }
                    ]
                  }
                ]
              }
            ]
          ]
        }
      ]
    }
  ]
}