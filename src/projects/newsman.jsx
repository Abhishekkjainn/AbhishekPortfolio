import { Helmet } from 'react-helmet';
export default function Newsman() {
  return (
    <div className="livitpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project Newsmann | Abhishek Jain | App Developer</title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">Newsmann</div>
        </div>
        <div className="indprojectsubhead">
          A dynamic news application built with Flutter, providing the latest
          news and the ability to search old articles. Features include
          comprehensive categorization, complete in-app article reading, a
          user-friendly interface, high-quality images, and robust backend
          services for a seamless experience.
        </div>
      </div>
      <a
        href="https://github.com/Abhishekkjainn/NewsMan"
        className="indprojectpage2"
      >
        <img src="/newsmanmockup.png" alt="" className="indfirstimg" />
      </a>
      <div className="indskillsusedpage">
        <div className="indpage3head">Skills Used</div>
        <div className="indskillstagdiv">
          <div className="indskilltag">App Development</div>
          <div className="indskilltag">Cross Platform App Dev</div>
          <div className="indskilltag">Backend Development</div>
          <div className="indskilltag">API Integration</div>
          <div className="indskilltag">UI UX Designing</div>
          <div className="indskilltag">DATABASE MANAGEMENT</div>
          <div className="indskilltag">Flutter</div>

          <div className="indskilltag">Dart Programming</div>
        </div>
      </div>
      <div className="indlogopage">
        <div className="indpage3head">Branding</div>
        <div className="logodiv">
          <div className="logoimg1">
            <img
              src="/newsmanimages/newsmanlogo.png"
              alt=""
              className="logodivimg"
            />
          </div>
          <div className="logoimg2">
            <img
              src="/newsmanimages/newsmanmockupind.png"
              alt=""
              className="logodivimg"
            />
          </div>
        </div>
      </div>

      <div className="indfeaturespage">
        <div className="indpage3head">Gallery</div>
        <div className="indimagesdiv">
          <div className="indimagecard">
            <img
              src="/newsmanimages/newsman1.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/newsmanimages/newsman2.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/newsmanimages/newsman3.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/newsmanimages/newsman4.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/newsmanimages/newsman5.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/newsmanimages/newsman6.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
