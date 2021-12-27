import axios from "axios";
import { ParamType } from "features/todo/reducer/taskSlice";
// // const SERVER = 'http://127.0.0.1:8000/api/suggestion'
const SERVER = 'http://192.168.0.70:8000/api/event'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}


function taskAPI( data: ParamType){
  console.log('task API 실행')
  return axios.get(`${SERVER}/date/${data.date}`)
}


export default {
  taskAPI,
}