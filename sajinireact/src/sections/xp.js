
import React from 'react';
import '../App.css'
import 'bulma/css/bulma.css';

function XP() {
  return (
    <>
    <p className="mt-6" id="k">Portfolio</p>

        <div className="container-1">

        <div className="container-2" style={{ width: '33%', paddingLeft: '5%', paddingRight: '5%' }}>
            <p>Education</p>
            <p>Eheliyagoda Central College</p>
            <p>(2011-2019)</p>
            <figure className="image is-128x128">
            <img className="is-square" id="ka" src="file:///C:/Users/Piyumi/OneDrive/Desktop/hand-highlighting-information-technology-tags-female-light-blue-highlighter-words-tag-cloud-clear-glass-whiteboard-40549318.jpg" alt="education" />
            </figure>
        </div>

        <div className="container-2" style={{ width: '33%', paddingLeft: '5%', paddingRight: '5%' }}>
            <p>Education</p>
            <p>Eheliyagoda Central College</p>
            <p>(2011-2019)</p>
            <figure className="image is-128x128">
            <img className="is-square" id="ka" src="file:///C:/Users/Piyumi/OneDrive/Desktop/resume-magnifying-glass-apply-job-experience-document-a-magnifying-glass-over-the-word-resume-stock-photograph_csp14970195.webp" alt="education" />
            </figure>
        </div>

        <div className="container-2" style={{ width: '33%', textAlign: 'center', color: 'azure', paddingLeft: '5%', paddingRight: '5%' }}>
            <p>Experience</p>
            <p style={{ marginTop: '10%' }}>Sri Lanka Telecom</p>
            <p>(2021-2022)</p>
            <p style={{ marginTop: '10%' }}>Sri Lanka Telecom</p>
            <p>(2021-2022)</p>
        </div>

        </div>
  </> 
  );
}

export default XP;