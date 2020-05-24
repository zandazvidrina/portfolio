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
                {config.address} <span className="zz-separator">· </span>
                <span>{config.phone} </span>
                <span className="zz-separator">· </span>
              </div>
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </div>
          </div>
          <p className="lead mb-5">
            I am a software developer with 4+ years of industry experience. I am
            knowledgeable in Angular, CSS, HTML, C# and SQL. I have demonstrated
            history of working with Selenium WebDriver, Ready!Api and other
            tools for automated testing. I've finished a Master's Degree focused
            in IT project management.
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
              <p>Main responsibilities:</p>
              <ul>
                <li>
                  Be responsible for developing UI pages for Marketplace and
                  Property using Angular 7/8, HTML5, CSS3, Typescript and SASS
                </li>
                <li>
                  Make Responsive Web Designs and think about accessibility
                </li>
                <li>
                  Write and maintain unit tests using Jest and Marbles
                  Frameworks
                </li>
                <li>
                  Use RxJS Observables to handle multiple values over time
                </li>
                <li>
                  Make code changes to API and backend using VB, C# and ASP.NET
                </li>
                <li>Use JIRA for bug tracking</li>
                <li>
                  For version control use Mercurial for continuous integration
                  use Jenkins and Teamcity
                </li>
                <li>
                  Use Angular Router to enable navigation from one view to the
                  next as customer performs application tasks.
                </li>
                <li>Use Sentry for error monitoring</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2019 - Present</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Test Analyst</h3>
              <div className="subheading mb-3">Trade Me</div>
              <p>Main responsibilities:</p>
              <ul>
                <li>
                  Plan and execute manual testing for projects including
                  functional, regression, API testing
                </li>
                <li>
                  Design and implement Automation frameworks like Page Object
                  model framework for Selenium Webdriver UI automation using
                  XPATH and CSS selectors
                </li>
                <li>
                  Setup environment from scratch for API testing in Ready!API
                  for my project
                </li>
                <li>
                  Create and maintain API automation tests using Ready!API and
                  Gherkin
                </li>
                <li>
                  Create and maintain UI automation tests using Selenium
                  WebDriver with C#, .NET framework, xunit, Specflow
                </li>
                <li>Use Mercurial for code base versioning and branching</li>
                <li>Configure and use Jenkins for continuous integration</li>
                <li>
                  Be responsible for deployments to production and checking
                  errors in Splunk
                </li>
                <li>
                  Use T-SQL for database queries and write scripts for database
                  refreshes to help and support testing
                </li>
                <li>
                  Be an active member for planning future projects, priority of
                  tasks
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2018 - October 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Test Analyst</h3>
              <div className="subheading mb-3">Linedata</div>
              <p>Main responsibilities:</p>
              <ul>
                <li>
                  Mantain the company's automation test suite and add new tests
                  to it using HP UFT
                </li>
                <li>Raise defects in internal Defect Tracking System</li>
                <li>
                  Perform complex tests for QA stories and change requests
                </li>
                <li>Write scripts in PL/SQL</li>
                <li>
                  Create test plans based on specification and other QA
                  documentation
                </li>
                <li>
                  Work in SCRUM teams using AGILE methodology and work closely
                  with development team and business analysts
                </li>
                <li>
                  Work with Windows services and Build electronic trading test
                  environments
                </li>
                <li>
                  Test real-time data using Bloomberg Terminal and Web Services
                </li>
                <li>Work with Remote servers to resolve issues</li>
                <li>Deployment of new builds in test environments</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2015 - July 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Junior System Analyst</h3>
              <div className="subheading mb-3">Exigen Services</div>
              <p>Main responsibilities:</p>
              <ul>
                <li>
                  Revise Product Design Specification for tax information system
                </li>
                <li>
                  Compare GUI results with records in database using SQL
                  statements
                </li>
                <li>Log defects in JIRA</li>
                <li>
                  Revise outdated test cases according to newest versions of use
                  cases and new requirements
                </li>
                <li>Manually test recent changes</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2015 - Jun 2015</span>
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
