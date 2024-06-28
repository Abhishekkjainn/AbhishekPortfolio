import { Helmet } from 'react-helmet';
export default function Livit() {
  return (
    <div className="livitpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project LiVIT | Abhishek Jain | App Developer</title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">LIVIT</div>
        </div>
        <div className="indprojectsubhead">
          Livit, my event app for VIT Vellore, keeps students connected to
          campus life. It features a comprehensive calendar of events with
          details, RSVP, and reminders – all in one user-friendly app. Livit
          simplifies event discovery and participation, fostering a vibrant
          college experience.
        </div>
      </div>
      <a
        href="https://github.com/Abhishekkjainn/LiVIT-Events"
        className="indprojectpage2"
      >
        <img src="/livitmockup2.png" alt="" className="indfirstimg" />
      </a>
      <div className="indskillsusedpage">
        <div className="indpage3head">Skills Used</div>
        <div className="indskillstagdiv">
          <div className="indskilltag">App Development</div>
          <div className="indskilltag">Cross Platform App Dev</div>
          <div className="indskilltag">Backend Development</div>
          <div className="indskilltag">Firebase Database</div>
          <div className="indskilltag">UI UX Designing</div>
          <div className="indskilltag">Dynamic Programming</div>
          <div className="indskilltag">Flutter </div>
          <div className="indskilltag">Dart Programming</div>
        </div>
      </div>
      <div className="indlogopage">
        <div className="indpage3head">Branding</div>
        <div className="logodiv">
          <div className="logoimg1">
            <img src="/livitlogo.jpg" alt="" className="logodivimg" />
          </div>
          <div className="logoimg2 blueback">
            <img src="/livitindmock.jpg" alt="" className="logodivimg" />
          </div>
        </div>
      </div>

      <div className="indfeaturespage">
        <div className="indpage3head">Gallery</div>
        <div className="indimagesdiv">
          <div className="indimagecard">
            <img
              src="/livitimages/livit1.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/livitimages/livit2.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/livitimages/livit3.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/livitimages/livit4.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
