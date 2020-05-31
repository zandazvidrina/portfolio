import React from 'react';
import { TeckStack } from './TeckStack';

export const ResumeItem = ({ data }) => {
  console.log(data.description.length);
  return (
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="resume-content">
        <h3 className="mb-0">{data.role}</h3>
        <div className="subheading mb-3">{data.company}</div>
          {data.description.length === 1 ? (
            <p>{data.description}</p>
          ) : (
            <DescriptionInList data={data.description} />
          )}
        
        <p>
          {data.techStack && data.techStack.length !== 0 && (
            <TeckStack data={data.techStack} />
          )}
        </p>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{data.period}</span>
      </div>
    </div>
  );
};

function DescriptionInList(props) {
  return (
    <div>
      <p>Main responsibilities:</p>
      <ul>
        {props.data.map((item, i) => (
          <li key = {i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
