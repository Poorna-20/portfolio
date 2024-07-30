// import React from 'react'
import './Home.css';
const Home = () => {
  return (
    <section className="home">
        <div className="container">
          <div className="home_head">
            <h1>👋 Welcome to My Portfolio!</h1>
            <p><span>Hi, I&apos;m <span>Poorna Chandra</span>,</span>  <br />
              I am a passionate web developer with a knack for creating beautiful, functional, and user-friendly websites. 
              With 2.5 years of experience in the industry, I specialize in both front-end and back-end development,
             ensuring every project I work on is tailored to meet client needs and exceed expectations.
            </p>
          </div>
          <div className="controlls">
            <a href="/src/assets/profile_pic.jpg" className='resume' download><ion-icon name="arrow-down-circle-outline"></ion-icon>My Resume</a>
          </div>
          <div className="contact">
            <p><span>Email :</span> <span>poornachidipothu@gmail.com</span></p>
            <p><span>Phone Number :</span> <span>+91 970*****19</span></p>
            {/* <div className="follow">
              <p>Follow Me on Social Media</p>
              <a href="#">Linkedin</a>
              <a href="#">Github</a>
              <a href="#">Instagram</a>
            </div> */}
          </div>
        </div>
    </section>
  )
}

export default Home
