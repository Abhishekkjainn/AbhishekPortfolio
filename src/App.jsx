// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ServicesPage from './pages/Services';
import ContactsPage from './pages/Contacts';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Router>
    </>
  );

  function Header() {
    return (
      <div className="header">
        <div className="headerlogo">
          <Link className="headerlogo" to={'/'}>
            <img src="logo2.jpg" alt="logo" className="headerlogoimage" />
          </Link>
        </div>

        <div className="headerlinks">
          <Link to={'/about'} className="linkstyle">
            <div className="linkdiv">
              <div className="circlefill"></div>{' '}
              <div className="text">About</div>
            </div>
          </Link>
          <Link to={'/projects'} className="linkstyle">
            <div className="linkdiv">
              <div className="circlefill"></div>{' '}
              <div className="text">Projects</div>
            </div>
          </Link>
          <Link to={'/services'} className="linkstyle">
            <div className="linkdiv">
              <div className="circlefill"></div>{' '}
              <div className="text">Services</div>
            </div>
          </Link>
          <Link to={'/contacts'} className="linkstyle">
            <div className="linkdiv">
              <div className="circlefill"></div>{' '}
              <div className="text">Contacts</div>
            </div>
          </Link>
        </div>
        <div className="resumelink">
          <Link to={'/resume'} className="linkstyle">
            <div className="linkdiv">
              <div className="circlefill"></div>{' '}
              <div className="text">Resume</div>
            </div>
          </Link>
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
