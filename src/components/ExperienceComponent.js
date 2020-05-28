import React, { Component } from 'react';

const techStackList = [['Angular','Typescript','HTML','CSS','JavaScript','JavaScript','Sass',
'RxJs','NgRx','Jest','Marbles','C#','VB.NET','ASP.NET','WebAPI','SQL Server','Mercurial','Scrum'],
['C#','.Net','Selenium Webdriver','Xunit','Specflow','React','SQL Server','Jenkins','Teamcity',
'Jira','Agile','Kanban','Gherkin','Splunk','POM modelling','Xpath','CSS','Postman','Powershell','ReadyAPI'],
['FinTech','Bloomberg','Asset Management','PL/SQL','HP UFT','Windows Services','Web Services','Remote servers',
'Tortoise Svn','Agile','Scrum']];

const techStack = techStackList.map((list) =>list.map((value) =>
<span className="zz-techStackSpan"><span className="zz-techStack-skill">{value}</span>
<i className="fas fa-star"></i>
</span>
));
class ExperienceComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        role: this.props.data.role,
        company :this.props.data.company,
         description:this.props.data.description,
         techStack: this.props.data.techStack,
         period:this.props.data.period,
      };
  }
  render(){
    console.log(this.props);
      return(
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      <h3 className="mb-0">{this.state.role}</h3>
      <div className="subheading mb-3">{this.state.company}</div>
      <p>
        {this.state.description}
      </p>
      <p>
        <strong>
          Tech stack:&nbsp;
          {this.state.techStack}
        </strong>
      </p>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{this.state.period}</span>
    </div>
  </div>
      )
  }
}
export default ExperienceComponent;
