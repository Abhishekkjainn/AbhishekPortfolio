import { Helmet } from 'react-helmet';
export default function Appdev() {
  return (
    <div className="appdeveloperpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Unlock Your App Idea - Cross-Platform Solutions | Abhishek Jain
        </title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">App Developer</div>
        </div>
      </div>
      <div className="banner appdevbanner">
        <div className="topbanner">
          <div className="skilltag">App Developer</div>
          <div className="skilltag">Cross Platform App Dev</div>
        </div>
        <div className="middlebanner">
          <div className="middlesubhead">
            Need an E-Commerce, Booking, or Utility App?
          </div>
          <div className="middlehead">
            Ready to Transform Your Vision into Reality?
          </div>
          <div className="middlesubhead">I'm Here to Help</div>
        </div>
        <div className="bottombanner">
          <div className="getquotebutton">Get Quote</div>
          <div className="getquotebutton">Send me Idea</div>
        </div>
      </div>
      <div className="indpage3head">Skills Used</div>
      <div className="skillsectiondiv">
        <div className="skillcarddiv">
          {/* <SkillCard imgsrc={'../reactjs.png'} skilltag={'React JS'} /> */}
          {/* <SkillCard imgsrc={'../NEXTJS.png'} skilltag={'Next JS'} /> */}
          <SkillCard imgsrc={'../nodejs.png'} skilltag={'Node JS'} />
          {/* <SkillCard imgsrc={'../javascript.png'} skilltag={'Javascript'} /> */}
          {/* <SkillCard imgsrc={'../typescript.png'} skilltag={'Typescript'} /> */}
          <SkillCard imgsrc={'../java.png'} skilltag={'Java'} />
          <SkillCard imgsrc={'../dart.png'} skilltag={'Dart'} />
          <SkillCard imgsrc={'../python.png'} skilltag={'Python'} />
          <SkillCard imgsrc={'../git.png'} skilltag={'Git'} />
          <SkillCard imgsrc={'../github.png'} skilltag={'Github'} />
          <SkillCard imgsrc={'../flutter.png'} skilltag={'Flutter'} />
          <SkillCard imgsrc={'../firebase.png'} skilltag={'Firebase'} />
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
