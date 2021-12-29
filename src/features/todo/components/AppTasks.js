import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { LayOut } from "features/common";
import "features/todo/style/Task.scss"
import { getBindingIdentifiers } from "@babel/types";
import { taskRequest } from "../reducer/taskSlice";
import TaskSingle from "./TaskSinge";
import TaskAdd from "./TaskAdd";
import TaskList from "./TaskList";

export default function AppTasks() {
 const [task, setTask] = useState([]);
 const [counter, setCounter] = useState(0)
 const [check, setCheck] = useState(false)
 
  // const dateFormat = (date) => dayjs(date).format("YYYY-MM-DD");
  // const today = new window.Date()
  // const [date, setDate] = useState(dateFormat(today))
  // setDate = "2021-12-27"

 useEffect(() => {
   console.log('task useEffect 사용')
   dispatch(taskRequest({date: "2021-12-27"}));
 }, []);
 
 const dispatch = useDispatch();
 const taskData = useSelector(state => state.task.taskData)
 if (taskData != null && counter < 1) {
  setCounter(counter + 1)
  setTask(taskData['data'])
}

// const handleClick = () => {
//   console.log('Click 함 함수로 설정해야하나^^,,,')
//   setCheck(!check);
// };

const handleClick = (e) => {
  e.preventDefault()
  e.stopPropagation()
  console.log('handleclick event')
  console.log(check)
  setCheck(!check)
  }



console.log(`task 넣기!!!${JSON.stringify(task)}`)

//  const suggestionData = useSelector(state => state.suggestion.suggestionData)
//  if (suggestionData != null && counter < 1) {
//    setCounter(counter + 1)
//    setSuggestion(suggestionData['data'])
//  }

 
return (

  <div className="todoapp stack-large">
   <h1>오늘 할일</h1>

   {/* <TaskAdd /> */}
   <form>
     <h2 className="label-wrapper">
       {/* <label htmlFor="new-todo-input" className="label__lg">
         What needs to be done?
       </label> */}
     </h2>
     <input
       type="text"
       id="new-todo-input"
       className="input input__lg"
       name="text"
       autoComplete="off"
       placeholder="What needs to be done?"
     />
     <button style={{marginLeft:"20px"}} type="submit" className="btn btn__primary btn__lg">
       Add
     </button>
   </form>
   {/* <div className="filters btn-group stack-exception">
     <button type="button" className="btn toggle-btn" aria-pressed="true">
       <span className="visually-hidden">Show </span>
       <span>all</span>
       <span className="visually-hidden"> tasks</span>
     </button>
     <button type="button" className="btn toggle-btn" aria-pressed="false">
       <span className="visually-hidden">Show </span>
       <span>Active</span>
       <span className="visually-hidden"> tasks</span>
     </button>
     <button type="button" className="btn toggle-btn" aria-pressed="false">
       <span className="visually-hidden">Show </span>
       <span>Completed</span>
       <span className="visually-hidden"> tasks</span>
     </button>
   </div> */}
   <h2 id="list-heading">
     {task.length} tasks remaining
   </h2>
   <ul
     role="list"
     className="todo-list stack-large stack-exception"
     aria-labelledby="list-heading"
   >
     <li className="todo stack-small">
     <div>
          {task.map((single, key) => {
              return (
                <TaskList
                  data={single}
                  key={key}
                />
              );
            })}
        </div>

       <div className="btn-group">
         <button type="button" className="btn">
           Edit <span className="visually-hidden">Eat</span>
         </button>
         <button type="button" className="btn btn__danger">
           Delete <span className="visually-hidden">Eat</span>
         </button>
       </div>
     </li>
   </ul>
 </div>


);
}