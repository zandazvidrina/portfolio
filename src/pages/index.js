import React from 'react';
import avatar from '../assets/images/zanda_avatar.jpg';
import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import {experience_list, education_list} from '../assets/data/ResumeData';
import { ResumeItem } from '../components/ResumeItem';

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
            Software developer with more 5 years of industry experience.
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
         {experience_list.map((item, i)=>
         <ResumeItem data = {item} key = {i}/>
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
          {education_list.map((item, i)=>
         <ResumeItem data = {item} key = {i}/>
         )}
          
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
