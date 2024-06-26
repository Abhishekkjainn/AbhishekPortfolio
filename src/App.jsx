import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import ServicesPage from './pages/Services';
import ContactsPage from './pages/Contacts';
import Livit from './projects/livit';
import Solero from './projects/solero';
import Newsman from './projects/newsman';
import Spennd from './projects/spennd';
import Reorder from './projects/reorder';
import TMDB from './projects/tmdb';
import Vision from './projects/vision';
import Hoodeye from './projects/hoodeye';
import Karigari from './projects/karigari';
import Automate from './projects/automate';
import Appdev from './services/appdeveloper';
import Uiux from './services/uiuxdesigner';
import Webdeveloper from './services/webdeveloper';

export default function App() {
  const [isOpen, setIsOpen] = useState(false); // State variable for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu state on click
  };

  return (
    <>
      <Router>
        <Header toggleMenu={toggleMenu} isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/livit" element={<Livit />} />
          <Route path="/projects/solero" element={<Solero />} />
          <Route path="/projects/newsmann" element={<Newsman />} />
          <Route path="/projects/spennd" element={<Spennd />} />
          <Route path="/projects/reorder" element={<Reorder />} />
          <Route path="/projects/TMDB" element={<TMDB />} />
          <Route path="/projects/vision" element={<Vision />} />
          <Route path="/projects/hoodeye" element={<Hoodeye />} />
          <Route path="/projects/karigari" element={<Karigari />} />
          <Route path="/projects/automate" element={<Automate />} />
          <Route path="/services/appdeveloper" element={<Appdev />} />
          <Route path="/services/uiuxdesigner" element={<Uiux />} />
          <Route path="/services/webdeveloper" element={<Webdeveloper />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Router>
    </>
  );

  function Header({ toggleMenu, isOpen }) {
    return (
      <div className="header">
        <div className="headerlogo">
          <Link className="headerlogo" to={'/'}>
            <img
              src="/finallogo2removedbg.png"
              alt="logo"
              className="headerlogoimage"
            />
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
          <a
            href="/Abhishekjain.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="linkstyle"
          >
            <div className="linkdiv">
              <div className="circlefill"></div>
              <div className="text">Resume</div>
            </div>
          </a>
        </div>
        <div className="respmenu">
          <input
            id="checkbox"
            type="checkbox"
            checked={isOpen}
            onChange={toggleMenu}
          />
          <label className="toggle" htmlFor="checkbox">
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
          </label>
        </div>

        <div className={`responsivemenudiv ${isOpen ? 'open' : ''}`}>
          <div className="closebutton" onClick={toggleMenu}>
            x
          </div>
          <div className="topheadrespmenu">
            <img
              src="/finallogo2removedbg.png"
              alt="headerlogo"
              className="respheaderimg"
            />
            <div className="respheadertag">Abhishek Jain</div>
          </div>
          <div className="respheaderlinksdiv">
            <Link to="/about" className="respheaderlink" onClick={toggleMenu}>
              About Me{' '}
              <div className="arrowicon">
                <img src="arror.png" alt="" className="arrowiconimg" />
              </div>
            </Link>
            <Link
              to="/projects"
              className="respheaderlink"
              onClick={toggleMenu}
            >
              Projects{' '}
              <div className="arrowicon">
                <img src="arror.png" alt="" className="arrowiconimg" />
              </div>
            </Link>
            <Link
              to="/services"
              className="respheaderlink"
              onClick={toggleMenu}
            >
              Services{' '}
              <div className="arrowicon">
                <img src="arror.png" alt="" className="arrowiconimg" />
              </div>
            </Link>
            <Link
              to="/contacts"
              className="respheaderlink"
              onClick={toggleMenu}
            >
              Contacts{' '}
              <div className="arrowicon">
                <img src="arror.png" alt="" className="arrowiconimg" />
              </div>
            </Link>
            <a
              href="/Abhishekjain.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="respheaderlink"
              onClick={toggleMenu}
            >
              Resume{' '}
              <div className="arrowicon">
                <img src="arror.png" alt="" className="arrowiconimg" />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
