import { Helmet } from 'react-helmet';
export default function TMDB() {
  return (
    <div className="livitpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project TMDB-Drive | Abhishek Jain | App Developer</title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">TMDB</div>
        </div>
        <div className="indprojectsubhead">
          A Flutter-based movie catalog app that categorizes movies into
          different genres and allows users to add favorites. It features a
          sleek user interface and a robust API for seamless performance.
        </div>
      </div>
      <a
        href="https://github.com/Abhishekkjainn/TMDBDrive"
        className="indprojectpage2"
      >
        <img src="/tmdbmockup.png" alt="" className="indfirstimg" />
      </a>
      <div className="indskillsusedpage">
        <div className="indpage3head">Skills Used</div>
        <div className="indskillstagdiv">
          <div className="indskilltag">App Development</div>
          <div className="indskilltag">Cross Platform App Dev</div>
          <div className="indskilltag">Backend Development</div>
          <div className="indskilltag">API Integration</div>
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
            <img src="/TMDBimages/tmdblogo.png" alt="" className="logodivimg" />
          </div>
          <div className="logoimg2">
            <img
              src="/TMDBimages/tmdbindmockup.png"
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
              src="/TMDBimages/tmdb1.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/TMDBimages/tmdb5.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/TMDBimages/tmdb3.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecard">
            <img
              src="/TMDBimages/tmdb4.jpg"
              alt="livit1"
              className="indimageimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
