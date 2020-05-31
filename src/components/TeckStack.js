import React from 'react';

export const TeckStack = ({ data }) => {
  return (
    <strong>
      Tech stack:&nbsp;
      {data.map((value, i) => (
        <span className="zz-techStackSpan" key={i}>
          <span className="zz-techStack-skill">{value}</span>
          <i className="fas fa-star"></i>
        </span>
      ))}
    </strong>
  );
};
