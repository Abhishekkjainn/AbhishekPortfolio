import { Helmet } from 'react-helmet';
export default function Uiux() {
  return (
    <div className="appdeveloperpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fuel Your Growth with UI/UX Design | Abhishek Jain</title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">UI UX Designer</div>
        </div>
      </div>
      <div className="banner appdevbanner">
        <div className="topbanner">
          <div className="skilltag">UI Designer</div>
          <div className="skilltag">User Experience</div>
        </div>
        <div className="middlebanner">
          <div className="middlesubhead">
            Seeking Exceptional UI/UX for Your App?
          </div>
          <div className="middlehead">
            Let's Bring Your Vision to Life with Stunning Design
          </div>
          <div className="middlesubhead">Your Ideas, Expertly Crafted</div>
        </div>
        <div className="bottombanner">
          <div className="getquotebutton">Get Quote</div>
          <div className="getquotebutton">Send me Idea</div>
        </div>
      </div>
    </div>
  );

  function SkillCard({ imgsrc, skilltag }) {
    return (
      <div className="skillcard">
        <img src={imgsrc} alt="React" className="skillimage" />
        <div className="skillcardtag">{skilltag}</div>
      </div>
    );
  }
}
