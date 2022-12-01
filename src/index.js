import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import giticon from "./githublight.png";
import linkedicon from "./linkedinwhite.png";

function Headshot() {
  return (
    <div class="headshot" id="headshot"><img src="https://trev-site.herokuapp.com/static//firstselfimg.jpg" /></div>
  )
}

function Mainbox(){
  return (
    <div class="main" id="main">
      <h2>Trevor Bennett</h2>
      <h5>Frontend Developer</h5>
      <h6><a href="http://trev-site.herokuapp.com">trev-site.herokuapp.com</a></h6>
      <div class="buttons">
      <a id="button1" href="mailto:trben0036@proton.me" >Email</a><a id="button2" href="https://www.linkedin.com/in/trvr-benntt/">LinkedIn</a></div>
      <h4>About</h4>
      <p>I am a developer learning front- & back-end stacks. I've learned some Python, HTML/CSS, Java, & JS including React and Redux.</p>
      <h4>Interests</h4>
      <p>Puppies, cooking, drawing, guitar & music, coding, reading history & literature</p>
    </div>
  )
}

function Footer(){
  return (
  <div class="foot" id="foot">
    <a id="profile-link" target="_blank" href="https://www.linkedin.com/in/trvr-benntt/">
        <div id="linkedin" class="hide">My LinkedIn</div>
        <img class="icon" src={linkedicon} alt="LinkedIn logo" />
    </a>
      <a id="profile-link" target="_blank" href="https://github.com/trvobennn">
        <div id="git" class="hide">My GitHub</div>
        <img class="icon" src={giticon} alt="Github logo" />
      </a>
  </div>)
}


const rootElem = document.getElementById("root")
const root = createRoot(rootElem);
root.render(
  <div>
    <Headshot />
    <Mainbox />
    <Footer />
  </div>)