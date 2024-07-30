// import React from 'react'
import './SideBar.css'
import pic from '../../assets/profile.svg'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="side_head">
        <div className="image_box">
            <img src={pic} alt="" />
        </div>
        <div className="name">
            <h1>Ch.Poorna Chandra</h1>
            <p>Web Developer</p>
        </div>
      </div>
      <div className="menu_toggle_btn">
        <input type="checkbox" id="menuToggle"/>
        <span className='line1'></span>
        <span className='line2'></span>
        <span className='line3'></span>
        <div className="menu" id="menu">
          <ul className="menu_items">
            <li className="menu_item"><Link to='/'>Home</Link></li>
            <li className="menu_item"><Link to='/about'>About</Link></li>
            <li className="menu_item"><Link to='/projects'>Projects</Link></li>
            <li className="menu_item"><Link to='/skills'>Skills</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="social_links">
          <a href="" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
          <a href="" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
          <a href="" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
        </div>
        <div className="foot">
          Desined by Poorna Chandra 🧡
        </div>
      </div>
    </div>
  )
}

export default SideBar
