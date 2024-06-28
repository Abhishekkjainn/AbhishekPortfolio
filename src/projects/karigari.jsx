import { Helmet } from 'react-helmet';
export default function Karigari() {
  return (
    <div className="livitpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project Karigari | Abhishek Jain | Web Developer</title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">Karigari</div>
        </div>
        <div className="indprojectsubhead">
          Developed a stunning UI for Karigari, a furniture store, creating an
          engaging and visually appealing online shopping experience.
        </div>
      </div>
      <a
        href="https://abhishekkjainn.github.io/Karigari/"
        className="indprojectpage2"
      >
        <img src="/karigarimockup.png" alt="" className="indfirstimg" />
      </a>
      <div className="indskillsusedpage">
        <div className="indpage3head">Skills Used</div>
        <div className="indskillstagdiv">
          <div className="indskilltag">Web Development</div>
          <div className="indskilltag">Responsive Web Designing</div>
          {/* <div className="indskilltag">Backend Development</div> */}
          <div className="indskilltag">E-Commerce</div>
          <div className="indskilltag">UI UX Designing</div>
          <div className="indskilltag">React JS</div>
        </div>
      </div>
      <div className="indlogopage">
        <div className="indpage3head">Branding</div>
        <div className="logodiv">
          <div className="logoimg1">
            <img
              src="/karigariimages/karigarilogo.png"
              alt=""
              className="logodivimg"
            />
          </div>
          <div className="logoimg2">
            <img
              src="/karigariimages/karigariindmockup.png"
              alt=""
              className="logodivimg"
            />
          </div>
        </div>
      </div>

      <div className="indfeaturespage">
        <div className="indpage3head">Gallery</div>
        <div className="indimagesdiv indimagesdivmonitor">
          <div className="indimagecardmonitor">
            <img
              src="/karigariimages/karigari5.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/karigariimages/karigari1.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>

          <div className="indimagecardmonitor">
            <img
              src="/karigariimages/karigari3.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/karigariimages/karigari4.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/karigariimages/karigari2.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
