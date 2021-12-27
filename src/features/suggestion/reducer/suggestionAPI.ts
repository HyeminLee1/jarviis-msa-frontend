import axios from "axios";
import { SuggestionResultPayload, SuggestionPayload  } from "./suggestionSlice";
// const SERVER = 'http://127.0.0.1:8000/api/suggestion'
const SERVER = 'http://192.168.0.70:8000/api/suggestion'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}


function suggestionAPI( data: SuggestionPayload){
    // alert(`API 실행 ::: ${JSON.stringify(data)}`)
    return axios.get(`${SERVER}/user/test/${data.user_id}`)
}

function suggestionAcceptAPI(data : SuggestionResultPayload){
  alert(JSON.stringify(data))
  return axios.post(`${SERVER}/accpet`, JSON.stringify(data), { headers });
}

function suggestionRejectAPI(data : SuggestionResultPayload){
  alert(JSON.stringify(data))
  return axios.post(`${SERVER}/reject`, JSON.stringify(data), { headers });
}


export default {
  suggestionAPI,
  suggestionAcceptAPI,
  suggestionRejectAPI,
}