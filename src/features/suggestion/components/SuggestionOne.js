import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import SuggestionOneSingle from "./SuggestionOneSingle";
import { useDispatch, useSelector } from 'react-redux'
import { suggestionRequest } from "features/suggestion/reducer/suggestionSlice"
import { stringify } from "querystring";
// useEffect 참고 https://xiubindev.tistory.com/100

const SuggestionOne = () => {
  const suggestionData = [
    {
    "suggestion_id": 11,
    "user_id": 1,
    "contents": "강남역 약속",
    "location": "강남역",
    "routine": [
        "목","금"
    ],
    "start": [
        "2021-12-23",
        "2021-12-24"
    ],
    "end": null,
    "classification": null,
    "type": "ROUTINE"
  },
  {
  "suggestion_id": 13,
  "user_id": 1,
  "contents": "일정 있을걸?",
  "location": null,
  "routine": null,
  "start": "2021-12-23",
  "end": null,
  "classification": "DEV",
  "type": "SUGGESTION"
}, 
{
"suggestion_id": 13,
"user_id": 1,
"contents": "크리스마스",
"location": null,
"routine": null,
"start": "2021-12-25",
"end": "2021-12-25",
"classification": "DEV",
"type": "SUGGESTION"
}
]

const dispatch = useDispatch();

useEffect(() => {
  alert("useEffect 사용")
  dispatch(suggestionRequest({user_id:1}));
}, []);

const mytest = useSelector(state => state.suggestion)
// setTest = {test : 1}
// alert(mytest.userLoding)
// alert(JSON.stringify(mytest))
alert(mytest.suggestionData)

  return (
    <div className='team-area'>
        <div>
          {suggestionData.map((single, key) => {
              return (
                <SuggestionOneSingle
                  data={single}
                  key={key}
                />
              );
            })}
        </div>
      </div>
 
  );
};

export default SuggestionOne;
