import PropTypes from "prop-types";
import React from "react";

const SuggestionOneSingle = ({ data }) => {

  // alert(data.routine)

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
              href={data.fbLink}
            >
              <i className="fa fa-check" />
            </a>
            <a
              className="remove"
              href={data.twitterLink}
            >
              <i className="fa fa-remove" />
            </a>
          </div>
        </div>
        <div className="team-content">
          <h4>{data.contents}</h4>
          <span>{`${data.start == null ? '' : data.start} `}{data.end == null ? '' : '~'}{data.end}</span>
          <span>{data.routine == "SUGGESTION" ? '' : `${data.routine}`}</span>
        </div>
      </div>
    </div>
  );
};

SuggestionOneSingle.propTypes = {
  data: PropTypes.object,
};

export default SuggestionOneSingle;
