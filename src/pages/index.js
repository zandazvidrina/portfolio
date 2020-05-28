import React from 'react';
import avatar from '../assets/images/zanda_avatar.jpg';
import Layout from '../components/Layout';
import ExperienceComponent from '../components/ExperienceComponent';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import experiences from '../assets/data/ExperienceData';

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


const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-4 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <div className="zz-heading-container">
            <img
              className="zz-img-header img-fluid rounded-circle mb-2"
              src={avatar}
              alt=""
            />
            <h1 className="mb-0 zz-resumeTitle">
              {config.firstName}
              <span className="text-primary">{config.lastName}</span>
            </h1>
            <div className="zz-subheading subheading mb-5">
              <div className="zz-address-phone">
                {config.address} <span className="zz-separator">·&nbsp;</span>
                <a href={`tel:${config.phone}`}>{config.phone}</a>
                <span className="zz-separator">&nbsp;·&nbsp;</span>
              </div>
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </div>
          </div>
          <p className="lead mb-5">
            Software developer with more than 4 years of industry experience.
            Knowledgeable in Angular, CSS, HTML, C#, and SQL. Demonstrated
            history of working with Selenium WebDriver, HP UFT and other tools
            for automated testing. Finished a master’s degree focused on IT
            project management.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-4 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
         {experiences.map((experience)=>
         <ExperienceComponent data={experience} />
         )}
         
            
          </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-4 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Liepaja University</h3>
              <div className="subheading mb-3">
                Master's Degree in IT project management
              </div>
              <div>Project Management</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2014 - 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Ventspils University College</h3>
              <div className="subheading mb-3">
                Bachelor's degree in Information Technology
              </div>
              <div>Computer Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2011 - 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Riga State Gymnasium No. 1</h3>
              <div className="subheading mb-3">High school Diploma</div>
              <div>Mathematics and Computer Science</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2005 - 2011</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-4 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-yarn"></i>
            </li>
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Responsive Design
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-4 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            I love adventures and spontaneous ideas. I tend to do things just
            for the fun of it. I enjoy travelling, hiking, camping and I am a
            fan of coastal walks.
          </p>
          <p>
            I love BBQ - sun, friends, beer, meat. I also like to cook, try to
            make things from scratch.
          </p>
          <p className="mb-0">
            I'm very interested in self-growth and psychology behind most
            things. Some of my free time I spend playing board games with my
            friends.
          </p>
        </div>
      </section>

      <hr className="m-0" />
    </div>
  </Layout>
  
);

export default IndexPage;
