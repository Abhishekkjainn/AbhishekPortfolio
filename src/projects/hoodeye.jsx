import { Helmet } from 'react-helmet';
export default function Hoodeye() {
  return (
    <div className="livitpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project Hoodeye | Abhishek Jain | App Developer</title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">Hoodeye</div>
        </div>
        <div className="indprojectsubhead">
          A sophisticated security application that identifies five safer
          locations compared to your current residence. It also visualizes
          previous crimes, including murders and thefts, through well-designed
          graphs and a user-friendly interface.
        </div>
      </div>
      <a
        href="https://github.com/Abhishekkjainn/Hoodeye"
        className="indprojectpage2"
      >
        <img src="/hoodeyemockup.png" alt="" className="indfirstimg" />
      </a>
      <div className="indskillsusedpage">
        <div className="indpage3head">Skills Used</div>
        <div className="indskillstagdiv">
          <div className="indskilltag">App Development</div>
          <div className="indskilltag">Cross Platform App Dev</div>
          <div className="indskilltag">Backend Development</div>
          <div className="indskilltag">Geolocation</div>
          <div className="indskilltag">UI UX Designing</div>
          <div className="indskilltag">Data Science</div>
          <div className="indskilltag">Machine Learning</div>
          <div className="indskilltag">Flutter</div>
          <div className="indskilltag">Python</div>
          <div className="indskilltag">Dart Programming</div>
        </div>
      </div>
      <div className="indlogopage">
        <div className="indpage3head">Branding</div>
        <div className="logodiv">
          <div className="logoimg1">
            <img
              src="/hoodeyeimages/hoodeyelogo.png"
              alt=""
              className="logodivimg"
            />
          </div>
          <div className="logoimg2">
            <img
              src="/hoodeyeimages/hoodeyeindmockup.png"
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
              src="/hoodeyeimages/hoodeye1.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/hoodeyeimages/hoodeye2.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
