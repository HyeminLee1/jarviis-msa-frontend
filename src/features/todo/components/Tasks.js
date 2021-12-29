import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { LayOut } from "features/common";
import "features/todo/style/Task.scss"
import { getBindingIdentifiers } from "@babel/types";
import { taskRequest } from "../reducer/taskSlice";
import TaskAdd from "./TaskAdd";
import TaskList from "./TaskList";
import { suggestionAcceptSuccess } from "features/suggestion/reducer/suggestionSlice";

export default function AppTasks() {
 const [task, setTask] = useState([]);
 const [counter, setCounter] = useState(0)
 
  // const dateFormat = (date) => dayjs(date).format("YYYY-MM-DD");
  const today = new window.Date()
  // const [date, setDate] = useState(dateFormat(today))
  // setDate = "2021-12-28"
  console.log(today)

const taskData = useSelector(state => state.task.taskData);
 useEffect(() => {
   console.log('task useEffect 사용')
   dispatch(taskRequest({date: "2021-12-29"}));
 }, []);
 
 const dispatch = useDispatch();
//  const taskData = useSelector(state => state.task.taskData)
 const state = useSelector(state => state.suggestion.suggestionData)
 console.log(`로그 변화 감지하기... ${JSON.stringify(state)}`)
 
 if (taskData != null && counter < 1) {
  setCounter(counter + 1)
  setTask(taskData['data'])
}

// console.log(`task 넣기!!!${JSON.stringify(task)}`)

 
return (

  <div className="todoapp stack-large">
   <h1>오늘 할일</h1>

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