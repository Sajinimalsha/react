import React from 'react';
import '../App.css'
import 'bulma/css/bulma.css';

function IDO2() {
  return (
    <>
      <p id="k" className="mt-6">WHAT CAN I DO</p>
      <div className="container-1">
        <div className="container-2" style={{ width: "50%", paddingLeft: "5%", paddingRight: "5%" }}>
          <h2 id="z" className="py-3"> <i className="fa-sharp fa-solid fa-pen pr-3"></i> PHP</h2>
          <p id="ru">Responsible for writing server side web applicaation logic,php developers usually develop back end components,connect the application with the other(often third party)web services,and support the front-enf developers by intergrate thier work with the application.</p>
          <h2 id="z" className="py-3"> <i className="fa-sharp fa-solid fa-pen pr-3"></i> Web Design</h2>
          <p id="ru"> Design logical and physical databases,reviews description of changes to database design to understand how changes affect how data is stored in terms of location,amount of spaces and access method. </p>
        </div> 
        <div className="container-2" style={{ width: "50%", paddingLeft: "5%", paddingRight: "5%" }}>
          <h2 style={{ color: "white" }}><b>PHP</b></h2> 
          <progress className="progress is-danger" value="75" max="100">75%</progress>
          <h2 style={{ color: "white" }}><b>MYSQL</b></h2>
          <progress className="progress is-dark" value="55" max="100">85%</progress>
        </div>
      </div>
    </>
  );
}

export default IDO2;