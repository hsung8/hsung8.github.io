import React, { Component } from 'react';


class Header extends Component {

   render() {
      return (
         <header id="home">

            <nav id="nav-wrap">
               <ul id="nav" className="nav">
                  <li className="current"><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#resume">Resume</a></li>
                  <li><a href="#portfolio">Works</a></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
               <img className="profile-pic" src="../images/headshot.jpg" alt="headshot" />
                  <h1>Hae Seung Sung</h1>
                  <h3 id="main-intro">I am a Data Analyst living in Atlanta, Georgia. With experience in environmental science, Geographic Information System (GIS), and Full-stack Development, I have knowledge in the research process and programming languages. <br /><br />
                  Building on my geography and landscape architecture background, knowledge, and skills, I
                  aim to continuously elevate my contributions towards a data-driven decision making in the pursuit of more livable and equitable communities.<br /><br />
                  Scroll down to see my resume for more details!</h3>

               </div>
            </div>

         </header>
      );
   }
}

export default Header;
