import React from 'react';
import './App.css';
import joel from './joel.jpg';

const App = () => {
  return (
       <div className="App">
        <img src={joel} alt="Generic"/>
    <h1>Joel</h1>
    <h2>Software Engineer</h2>
    <div className="_src_component_Section_module_card">
      <h3>About Me</h3>
    <hr></hr>
      <p>
      I am an advocate of self-improvement and I want to help people improve their lives through knowledge and application 
      </p>
    </div>
    <div className="_src_component_Section_module_card">
      <h3>Contact me</h3>
    <hr></hr>
      <p>Email: joel_email@gmail.com | Linkedin: https//www.linkedin.com</p>
    </div>
    </div>
  )
}

export default App
