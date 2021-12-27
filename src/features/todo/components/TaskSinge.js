import PropTypes from "prop-types";
import React from "react";

const TaskSingle = ({ data }) => {
    
 const [check, setCheck] = useState(false)

  return (
      <div>
          <div className="c-cb">
            <input  id="todo" type="checkbox" defaultChecked={false} onChange={()=>{
              setCheck(!check)
            }}/>
            <label className="todo-label" htmlFor="todo">
                {data.title}
            </label>
            { check ? <img class="rotate-center"
            style={{ width: '6%', visibility: "visible", float: "right" }}
            src={require("features/todo/images/feedback.png").default}/>
            :<img 
            style={{ width: '6%', visibility: "hidden", float: "right" }}
            src={require("features/todo/images/feedback.png").default}/>}
          </div>
      </div>
  );
};

TaskSingle.propTypes = {
  data: PropTypes.object,
};

export default TaskSingle;
