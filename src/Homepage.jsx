import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import $ from 'jquery';
import CircleType from 'circletype';
import { FaStarOfLife, FaCircle } from 'react-icons/fa';

export default function Homepage() {
  const rotatedRef = useRef(null);

  useEffect(() => {
    if (rotatedRef.current) {
      new CircleType(rotatedRef.current).radius(50);
    }
    $(window).scroll(function () {
      var offset = $(window).scrollTop();
      offset = offset * 0.5;
      $('.circular-text').css({
        '-moz-transform': 'rotate(' + offset + 'deg)',
        '-webkit-transform': 'rotate(' + offset + 'deg)',
        '-o-transform': 'rotate(' + offset + 'deg)',
        '-ms-transform': 'rotate(' + offset + 'deg)',
      });
    });
  }, []);

  return (
    <>
      <Circulartext />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </>
  );

  function Circulartext() {
    return (
      <>
        <div className="circular-text">
          <span id="rotated" ref={rotatedRef}>
            Web Developer | Flutter App Developer | Database Management |
            Version Control |
          </span>
        </div>
        <div className="arrow">
          <img src="mainlogo2.png" alt="mainlogo" className="centercircle" />
        </div>
      </>
    );
  }

  function Page1() {
    return (
      <div className="page1">
        <div className="marqueepage1">
          <Marquee className="namemarquee" speed={40} loop={0}>
            &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
            <FaStarOfLife /> &nbsp; Abhishek Jain &nbsp;
          </Marquee>
        </div>
        <div className="imagepage1">
          <img src="abhishek.png" alt="abhishek" className="abhishekimage" />
        </div>
      </div>
    );
  }

  function Page2() {
    return (
      <div className="page2">
        <Marquee
          className="aboutmemarquee"
          speed={40}
          autoFill={true}
          loop={0}
          direction="right"
        >
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
          <FaStarOfLife /> &nbsp; About Me &nbsp;
        </Marquee>

        <div className="aboutmesection">
          <div className="aboutmecontent">
            I’m a skilled <span className="blue"> web developer </span> and{' '}
            <span className="blue"> app developer </span>with nearly three years
            of experience crafting innovative and functional digital solutions.
            My expertise lies in building user-friendly{' '}
            <span className="blue"> websites</span> and{' '}
            <span className="blue"> applications</span> that deliver seamless
            experiences. <br />
            <br />
            Throughout my career, I have successfully completed numerous{' '}
            <span className="blue"> freelancing projects</span>, demonstrating a
            keen ability to adapt and excel in dynamic environments. I bring a
            blend of technical proficiency and creative problem-solving to every
            project, ensuring{' '}
            <span className="blue"> high-quality results</span> that meet client
            needs and exceed expectations.
          </div>
          <div className="resumebutton">
            <div className="circlebutton"></div>
            <div className="buttonhead">Resume</div>
          </div>
        </div>
      </div>
    );
  }

  function Page3() {
    return (
      <div className="page3">
        <Marquee
          className="aboutmemarquee"
          speed={40}
          autoFill={true}
          loop={0}
          direction="left"
        >
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
          <FaStarOfLife /> &nbsp; Expertise &nbsp;
        </Marquee>
        <div className="skillsection">
          <div className="skilldiv skilldiv1">
            <div className="topskilldiv">
              <div className="skilltag">Web Dev</div>
              <div className="skilltag">Available</div>
            </div>
            <div className="middleskilldiv">
              <div className="titleskillcard">Web Developer</div>
              <div className="titlesub">
                As a freelance web developer, I create custom websites that
                blend sleek design with seamless functionality. I specialize in
                crafting user-friendly interfaces and robust backend systems,
                ensuring every project meets client needs with precision and
                creativity.
              </div>
            </div>
            <div className="bottomskilldiv">
              <div className="infobutton">Get More Info</div>
            </div>
          </div>
          <div className="skilldiv skilldiv2">
            <div className="topskilldiv">
              <div className="skilltag">App Dev</div>
              <div className="skilltag">Available</div>
            </div>
            <div className="middleskilldiv">
              <div className="titleskillcard">App Developer</div>
              <div className="titlesub">
                As a freelance Flutter developer, I create cross-platform mobile
                apps for Android and iOS. My focus is on delivering sleek
                designs and high-performance applications that meet client goals
                and user expectations seamlessly.
              </div>
            </div>
            <div className="bottomskilldiv">
              <div className="infobutton">Get More Info</div>
            </div>
          </div>
          <div className="skilldiv skilldiv3">
            <div className="topskilldiv">
              <div className="skilltag">User Interface</div>
              <div className="skilltag">User Experience</div>
            </div>
            <div className="middleskilldiv">
              <div className="titleskillcard">UI UX Designer</div>
              <div className="titlesub">
                As a freelance UI/UX designer, I create intuitive and visually
                appealing interfaces that prioritize user experience. My designs
                blend creativity with usability, ensuring seamless navigation
                and engagement for optimal digital experiences.
              </div>
            </div>
            <div className="bottomskilldiv">
              <div className="infobutton">Get More Info</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Page4() {
    return (
      <div className="page4">
        {/* <div className="headingpage4">
          <div className="page4circle"></div>
          <div className="projecthead">Projects</div>
        </div> */}
        <Marquee
          className="aboutmemarquee"
          speed={40}
          autoFill={true}
          loop={0}
          direction="left"
        >
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
          <FaStarOfLife /> &nbsp; Projects &nbsp;
        </Marquee>
        <img src="livitmockup.png" alt="livitporject" className="mockupimg" />
      </div>
    );
  }
}
