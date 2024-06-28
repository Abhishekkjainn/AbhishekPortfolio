import { Helmet } from 'react-helmet';
export default function Webdeveloper() {
  return (
    <div className="appdeveloperpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Building Engaging and Dynamic Websites | Abhishek Jain</title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">Web Developer</div>
        </div>
      </div>
      <div className="banner appdevbanner">
        <div className="topbanner">
          <div className="skilltag">Web Developer</div>
          <div className="skilltag">Backend Dev</div>
          <div className="skilltag">Frontend Dev</div>
        </div>
        <div className="middlebanner">
          <div className="middlesubhead">Need a Dynamic Web Platform?</div>
          <div className="middlehead">
            Let's Transform Your Website with Cutting-Edge Technologies
          </div>
          <div className="middlesubhead">
            Expertise in Web Based Technologies
          </div>
        </div>
        <div className="bottombanner">
          <div className="getquotebutton">Get Quote</div>
          <div className="getquotebutton">Send me Idea</div>
        </div>
      </div>
      <div className="indpage3head">Skills Used</div>
      <div className="skillsectiondiv">
        <div className="skillcarddiv">
          <SkillCard imgsrc={'../reactjs.png'} skilltag={'React JS'} />
          <SkillCard imgsrc={'../NEXTJS.png'} skilltag={'Next JS'} />
          <SkillCard imgsrc={'../nodejs.png'} skilltag={'Node JS'} />
          <SkillCard imgsrc={'../javascript.png'} skilltag={'Javascript'} />
          <SkillCard imgsrc={'../typescript.png'} skilltag={'Typescript'} />
          <SkillCard imgsrc={'../java.png'} skilltag={'Java'} />
          {/* <SkillCard imgsrc={'../dart.png'} skilltag={'Dart'} /> */}
          <SkillCard imgsrc={'../python.png'} skilltag={'Python'} />
          <SkillCard imgsrc={'../git.png'} skilltag={'Git'} />
          <SkillCard imgsrc={'../github.png'} skilltag={'Github'} />
          {/* <SkillCard imgsrc={'../flutter.png'} skilltag={'Flutter'} /> */}
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
