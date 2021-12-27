import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import SuggestionOneSingle from "./SuggestionOneSingle";
import { useDispatch, useSelector } from 'react-redux'
import { suggestionRequest } from "features/suggestion/reducer/suggestionSlice"
import { stringify } from "querystring";
// useEffect 참고 https://xiubindev.tistory.com/100

// suggestionData = [{
//   "suggestion_id": 11,
//   "user_id": 1,
//   "contents": "강남역 약속",
//   "location": "강남역",
//   "routine": [
//       "목","금"
//   ],
//   "start": [
//       "2021-12-23",
//       "2021-12-24"
//   ],
//   "end": null,
//   "classification": null,
//   "type": "ROUTINE"
// },
// {
// "suggestion_id": 13,
// "user_id": 1,
// "contents": "일정 있을걸?",
// "location": null,
// "routine": null,
// "start": "2021-12-23",
// "end": null,
// "classification": "DEV",
// "type": "SUGGESTION"
// }, 
// {
// "suggestion_id": 13,
// "user_id": 1,
// "contents": "크리스마스",
// "location": null,
// "routine": null,
// "start": "2021-12-25",
// "end": "2021-12-25",
// "classification": "DEV",
// "type": "SUGGESTION"
// }
// ]


const SuggestionOne = () => {
  
  const [counter, setCounter] = useState(0)
  const [juudata, setJuudata] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    // alert("1. useEffect 사용")
    dispatch(suggestionRequest({user_id:1}));
  }, []);

  const mytest = useSelector(state => state.suggestion.suggestionData)
  if (mytest != null && counter < 1) {
    // alert(`if문 juudata JSON ::: ${JSON.stringify(juudata)}`)
    setCounter(counter + 1)
    setJuudata(mytest['data'])
  }

  
  // alert(`juudata ::: ${JSON.stringify(juudata)}`)

  return (
    <div className='team-area'>
        <div>
          {juudata.map((single, key) => {
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
