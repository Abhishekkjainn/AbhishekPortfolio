import { useState } from 'react';
import './App.css';
import Homepage from './Homepage';

export default function App() {
  return (
    <>
      <Header />
      <Homepage />
    </>
  );

  function Header() {
    return (
      <div className="header">
        <div className="headerlogo">
          <img src="logo2.jpg" alt="logo" className="headerlogoimage" />
        </div>
        <div className="headerlinks">
          <div className="linkdiv">
            <div className="circlefill"></div> <div className="text">About</div>
          </div>
          <div className="linkdiv">
            <div className="circlefill"></div>{' '}
            <div className="text">Projects</div>
          </div>
          <div className="linkdiv">
            <div className="circlefill"></div>{' '}
            <div className="text">Services</div>
          </div>
          <div className="linkdiv">
            <div className="circlefill"></div>{' '}
            <div className="text">Contacts</div>
          </div>
        </div>
        <div className="resumelink">
          <div className="linkdiv">
            <div className="circlefill"></div>{' '}
            <div className="text">Resume</div>
          </div>
        </div>
        <div className="respmenu">
          <input id="checkbox" type="checkbox" />
          <label class="toggle" for="checkbox">
            <div id="bar1" class="bars"></div>
            <div id="bar2" class="bars"></div>
            <div id="bar3" class="bars"></div>
          </label>
        </div>
      </div>
    );
  }
}
