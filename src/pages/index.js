import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am a software developer with 4+ years of industry experience. I am
            knowledgeable in Angular, C# and SQL. I have demonstrated history of
            working with Selenium WebDriver, Ready!Api and other tools for
            automated testing. I've finished a Master's Degree focused in IT
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
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full stack developer</h3>
              <div className="subheading mb-3">Trade Me</div>
              <p></p>
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
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
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
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
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
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
            <i class="devicon-csharp-plain"></i>
            </li>
         
          
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />
    </div>
  </Layout>
);

export default IndexPage;
