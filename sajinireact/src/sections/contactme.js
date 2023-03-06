
import React from 'react';
import '../App.css'
import 'bulma/css/bulma.css';

function CONTACT() {
  return (
    <>
    <div className="container-1" style={{ marginTop: '5%' }}>
  <div className="container-2" style={{ width: '33%', paddingLeft: '5%', paddingRight: '5%' }}>
    <h2 style={{ color: 'white', fontSize: '30px' }}><b>CONTACT</b></h2>
    <h1>+94701553093</h1>
    <h1>Srilanka</h1>
    <h1>sajidis@gmail.com</h1>
  </div>

  <div className="container-2" style={{ width: '33%', display: 'flex', flexDirection: 'column', paddingLeft: '5%', paddingRight: '5%' }}>
    <label className="label">Name</label>
    <div className="control">
      <input className="input" type="text" placeholder="name" style={{ width: '280px' }} />
    </div>
    <label className="label">Email</label>
    <div className="control">
      <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" style={{ width: '280px' }} />
    </div>
  </div>

  <div className="container-2" style={{ width: '33%', paddingLeft: '5%', paddingRight: '5%' }}>
    <div>
      <label className="label">Message</label>
      <div className="control">
        <textarea style={{ height: '120px', width: '280px' }} />
      </div>
    </div>
  </div>
</div>
  </> 
  );
}

export default CONTACT;