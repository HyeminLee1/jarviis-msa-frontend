import PropTypes from "prop-types";
import React, { useState }  from "react";
import { useDispatch } from 'react-redux'

const TaskList = ({ data }) => {
//고칠부분 check는 dispatch로 db 고치기 completion => false에서 true로 
 const [check, setCheck] = useState(false)

 console.log(`data 확인 ::: ${data.title}`)
 console.log(`completion확인 ::: ${data.completion}`)

  return (
    <div className="c-cb">
    <input  id="todo-0" type="checkbox" defaultChecked={false} onChange={()=>{
      setCheck(!check)
    }}/>
    <label className="todo-label" htmlFor="todo-0">
      {data.title}
    </label>
    { check ? <img class="rotate-center"
    style={{ width: '6%', visibility: "visible", float: "right" }}
    src={require("features/todo/images/feedback.png").default}/>
    :<img 
    style={{ width: '6%', visibility: "hidden", float: "right" }}
    src={require("features/todo/images/feedback.png").default}/>}
  </div>   
  );
};

TaskList.propTypes = {
  data: PropTypes.object,
};

export default TaskList;
