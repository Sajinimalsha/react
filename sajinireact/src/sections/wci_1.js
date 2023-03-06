import React from 'react';
import '../App.css'
import 'bulma/css/bulma.css';

function IDO1() {
  return (
    <>
    <p id="k" className="mt-6">WHAT CAN I DO</p>
    <div className="container-1 container-3">
    <div className="container-2" style={{ width: "50%", paddingLeft: "5%", paddingRight: "5%" }}>
      <p id="z" className="my-4"><i className="fa-sharp fa-solid fa-pen pr-3"></i> UI/UX Design</p>
      <p id="ru">Creates the user interface app,website or other interactive media.thier work includes collaborating with product managers and engineers to gather requiremnents from user before designing ideas that can be communicated using storyboards.</p>
      <p className="my-4" id="z"><i className="fa-sharp fa-solid fa-pen pr-3"></i>Web Design</p>
      <p id="ru"> Planing and creation of websites.This includes a number of separate skills that all fall under the umbrella of web design. </p>
    </div>
    <div className="container-2" style={{ width: "50%", paddingLeft: "5%", paddingRight: "5%" }}>
      <h2 style={{ color: "white" }}><b>Html</b></h2>
      <progress className="progress is-danger" value="75" max="100">75%</progress>
      <h2 style={{ color: "white" }}><b>Css</b></h2>
      <progress className="progress is-dark" value="55" max="100">85%</progress>
      <h2 style={{ color: "white" }}><b>Figma</b></h2>
      <progress className="progress is-link" value="85" max="100">90%</progress>
      <h2 style={{ color: "white" }}><b>Javascript</b></h2>
      <progress className="progress is-light" value="87" max="100">70%</progress>
      <h2 style={{ color: "white" }}><b>Canva</b></h2>
      <progress className="progress is-warning" value="78" max="100">65%</progress>
      <h2 style={{ color: "white" }}><b>Photoshop</b></h2>
      <progress className="progress is-align-self-stretch" value="80" max="100">55%</progress>
    </div>
  </div>
  </> 
  );
}

export default IDO1;