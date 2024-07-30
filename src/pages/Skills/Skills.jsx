// import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <h1 className='title'>&lt; Skills /&gt;</h1>
        <div className="skills_container">
          <div className="skill_box">
            <h2>Programming Skills</h2>
            <div className="skill_block">
              <span className="skill"><ion-icon name="logo-python"></ion-icon></span>
              <span className="skill"><i className="ri-java-fill"></i></span>
            </div>
          </div>
          <div className="skill_box">
            <h2>Web Development Skills</h2>
            <div className="skill_block">
              <span className="skill"><ion-icon name="logo-html5"></ion-icon></span>
              <span className="skill"><ion-icon name="logo-css3"></ion-icon></span>
              <span className="skill"><ion-icon name="logo-javascript"></ion-icon></span>
              <span className="skill"><ion-icon name="logo-react"></ion-icon></span>
              <span className="skill"><ion-icon name="logo-nodejs"></ion-icon></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
