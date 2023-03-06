import '../App.css'
import 'bulma/css/bulma.css';
import my from '../images/my.jpg';

function Profile() {
  return (
    
    <div className="container-1 container-3">
      <div className="container-2" style={{width: '50%'}}>
          <img id="id123" src={my}   alt="Profile Picture" />
      </div>
      <div className="container-2" style={{width: '50%', display: 'flex', flexDirection: 'column', paddingLeft: '8%'}}>
        <p style={{textAlign: 'center', fontSize: '250%', fontWeight: 'bolder', color: 'aliceblue'}}>SAJINI DISSANAYAKE</p>
        <div>
          <p className="mt-4" id="ru" style={{textAlign: 'center', fontSize: '200%', fontWeight: 'bolder', color: 'aliceblue'}}>Full Stack Developer</p>
          <p className="mt-4" id="ru" style={{textAlign: 'center', color: 'aliceblue'}}>Do you need to create website? When creating websites,design from<br /> design to implementation.I also ensure the perfect technical aspect,<br />so that everything runs exactly as it should.if you would be interested in <br />my portfolio of experience-write to me!</p> 
        </div>
        <div id="bset" className="py-5" style={{display: 'flex', justifyContent: 'center'}}>
          <button className="button is-rounded is-dark">Portfolio</button>
          <button className="button is-rounded mx-4">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;