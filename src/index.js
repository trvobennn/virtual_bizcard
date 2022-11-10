import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
  return (<div class="foot" id="foot"></div>)
}


const root = document.getElementById("app")
ReactDOM.render(
  <div>
    <Headshot />
    <Mainbox />
    <Footer />
  </div>
  , root)