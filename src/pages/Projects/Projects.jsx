// import React from 'react'

import './Projects.css'
const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h1 className='title'>&lt; Projects /&gt;</h1>
        <div className="projects_container">
          <div className="projects_box">
            <h2 className='sub-title'>Notes Website</h2>
            <ul>
              <li>Developed a full-stack Notes App using ReactJS, Tailwind CSS, NodeJS, ExpressJS, and MongoDB, featuring a sleek user interface.</li>
              <li>Implemented secure login and signup functionality to manage user access and data.</li>
              <li>Added features such as note creation, pinning notes for easy access, and a visually appealing user interface.</li>
            </ul>
          </div>
          <div className="projects_box">
            <h2 className='sub-title'>Translator Website</h2>
            <ul>
              <li>Utilized a translator API for seamless language translation.</li>
              <li>Implemented user-friendly features.</li>
              <li>Leveraged backend for login and signup functionality, ensuring secure user access and data management for efficient translation services.</li>
            </ul>
          </div>
          <div className="projects_box">
            <h2 className='sub-title'>CurioLearn Website</h2>
            <ul>
              <li>Developed an educational platform integrating Wikipedia content, YouTube videos, and curated images.</li>
              <li>Implemented APIs for video embedding and image curation and dictionary.</li>
              <li>Focused on user engagement by leveraging these features.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
