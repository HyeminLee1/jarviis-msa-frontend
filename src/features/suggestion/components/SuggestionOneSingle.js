import PropTypes from "prop-types";
import React  from "react";
import { suggestionAcceptRequest, suggestionRejectRequest } from "features/suggestion/reducer/suggestionSlice";
import { useDispatch } from 'react-redux'

const SuggestionOneSingle = ({ data }) => {
  [suggestion, Setsuggestion] = useState({})
  Setsuggestion
  
  console.log(`single data check ::: ${JSON.stringify(data)}`)
  const dispatch = useDispatch();

  // console.log(`싱글데이터 데이터 확인`)
  function handleClick_accept(data) {
    dispatch(suggestionAcceptRequest(data));
    location.reload()
  }

  function handleClick_reject(data){
    dispatch(suggestionRejectRequest(data))
  }


  return (
    <div>
      <div
        className="team-wrapper">
        <div className="team-img">
          <img
            className="img-fluid"
          />
          <div className="team-action">
          <h4>할까 말까</h4>  
            <a
              className="check"
              onClick = {async () => await handleClick_accept(data)}
            >
              <i className="fa fa-check" />
            </a>
            <a
              className="remove"
              onClick={async() => await handleClick_reject(data)}
            >
              <i className="fa fa-remove" />
            </a>
          </div>
        </div>
        <div className="team-content">
          <h4>{data.contents}</h4>
          <span>{`${data.start == null ? '' : data.start} `}{data.end == null ? '' : '~'}{data.end}</span>
          <span>{data.routine == null ? '' : `${data.routine}`}</span>
        </div>
      </div>
    </div>
  );
};

SuggestionOneSingle.propTypes = {
  data: PropTypes.object,
};

export default SuggestionOneSingle;
