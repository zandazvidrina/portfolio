import React from 'react';
import avatar from '../assets/images/zanda_avatar.jpg';
import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
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
                <span>{config.phone} </span>
                <span className="zz-separator">·&nbsp;</span>
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
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full stack developer</h3>
              <div className="subheading mb-3">Trade Me</div>
              <p>
                Create new features for Trade Me platform using Angular. Make
                Responsive Web Designs and think about accessibility. Write and
                maintain unit tests. Use RxJS Observables to handle multiple
                values over time. Make code changes to API and legacy code using
                VB, C# and ASP.NET. Use Mercurial for version control. Use
                Angular Router to enable navigation from one view to the next.
                Monitor errors in Sentry.
              </p>
              <p>
                <strong>
                  Tech stack: Angular <i className="fas fa-star"></i>
                  Typescript <i className="fas fa-star"></i>
                  HTML <i className="fas fa-star"></i>
                  CSS <i className="fas fa-star"></i>
                  JavaScript <i className="fas fa-star"></i>
                  Sass <i className="fas fa-star"></i>
                  RxJs <i className="fas fa-star"></i>
                  NgRx <i className="fas fa-star"></i>
                  Jest <i className="fas fa-star"></i>
                  Marbles <i className="fas fa-star"></i>
                  C# <i className="fas fa-star"></i>
                  VB.NET <i className="fas fa-star"></i>
                  ASP.NET <i className="fas fa-star"></i>
                  WebAPI <i className="fas fa-star"></i>
                  SQL Server <i className="fas fa-star"></i>
                  Mercurial <i className="fas fa-star"></i>
                  Scrum
                </strong>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2019 - Present</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Test Analyst</h3>
              <div className="subheading mb-3">Trade Me</div>
              <p>
                Manage testing practices for an accommodation service provider.
                Setup test automation environments from scratch using Selenium
                Webdriver and ReadyAPI. Plan and execute manual testing for
                projects including functional, regression, API testing. Create
                and maintain API and UI automation tests. Use Mercurial for code
                base versioning and branching. Configure and use Jenkins for
                continuous integration for UI automation. Deploy to production
                and monitoring errors. Write SQL scripts to support testing.
              </p>
              <p>
                <strong>
                  Tech stack: C# <i className="fas fa-star"></i> .Net{' '}
                  <i className="fas fa-star"></i> Selenium Webdriver{' '}
                  <i className="fas fa-star"></i> Xunit{' '}
                  <i className="fas fa-star"></i> Specflow{' '}
                  <i className="fas fa-star"></i> React{' '}
                  <i className="fas fa-star"></i> SQL Server{' '}
                  <i className="fas fa-star"></i> Jenkins{' '}
                  <i className="fas fa-star"></i>
                  Teamcity <i className="fas fa-star"></i> Jira{' '}
                  <i className="fas fa-star"></i> Agile{' '}
                  <i className="fas fa-star"></i> Kanban{' '}
                  <i className="fas fa-star"></i> Gherkin{' '}
                  <i className="fas fa-star"></i> Splunk{' '}
                  <i className="fas fa-star"></i> POM modelling{' '}
                  <i className="fas fa-star"></i> Xpath{' '}
                  <i className="fas fa-star"></i> CSS{' '}
                  <i className="fas fa-star"></i> Postman{' '}
                  <i className="fas fa-star"></i>
                  Powershell <i className="fas fa-star"></i> ReadyAPI
                </strong>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2018 - October 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Test Analyst</h3>
              <div className="subheading mb-3">Linedata</div>
              <p>
                Perform complex tests for Financial asset management platform.
                Maintain the company's automation test suite and add new tests
                to it using HP UFT. Create test plans based on the specification
                and other QA documentation. Work in Scrum teams using and work
                closely with the development team and business analysts. Work
                with Windows services and real-time data using Bloomberg
                Terminal and Web Services. Configure remote servers and deploy
                new builds
              </p>
              <p>
                <strong>
                  Tech stack: FinTech <i className="fas fa-star"></i>{' '}
                  Bloomberg <i className="fas fa-star"></i> Asset
                  Management <i className="fas fa-star"></i> PL/SQL{' '}
                  <i className="fas fa-star"></i> HP UFT{' '}
                  <i className="fas fa-star"></i>
                  Windows Services <i className="fas fa-star"></i> Web
                  Services <i className="fas fa-star"></i> Remote servers{' '}
                  <i className="fas fa-star"></i> Tortoise Svn{' '}
                  <i className="fas fa-star"></i> Agile{' '}
                  <i className="fas fa-star"></i> Scrum
                </strong>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2015 - July 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Student Council president</h3>
              <div className="subheading mb-3">
                Ventspils University College
              </div>
              <p>Main responsibilities:</p>
              <ul>
                <li>Manage Student Body and motivating the team</li>
                <li>Plan the budget</li>
                <li>Supervise the work of Student Body committees</li>
                <li>
                  Attend official meetings with the academic administration
                </li>
                <li>Work with students to resolve problems</li>
                <li>Speaking publicly at school events</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2013 - April 2014</span>
            </div>
          </div>
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
