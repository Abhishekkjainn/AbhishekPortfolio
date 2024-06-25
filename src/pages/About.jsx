import Marquee from 'react-fast-marquee';
import { FaStarOfLife, FaCircle } from 'react-icons/fa';
export default function AboutPage() {
  return (
    <div className="aboutpage">
      <div className="projectpage1">
        <div className="projectpage1head">
          <div className="head">
            <div className="projectcircle"></div>
            <div className="projectheadcontent">About Me</div>
          </div>
          <div className="projectsubhead">
            I was born and raised in a small town of Central India but I'm
            currently living in Vellore, Pursuing my BTech Degree in Electronics
            and Communication Engineering from Vellore Institute of Technology ,
            Vellore.
          </div>
        </div>
      </div>
      <div className="aboutpage2">
        <div className="whatidobanner">
          <div className="whatidohead">
            <div className="whatidocircle"></div>
            <div className="whatidoheadcontent">What I Do?</div>
          </div>
          <div className="whatidocontent">
            "I'm a seasoned web and cross-platform app developer with three
            years of hands-on experience, currently advancing my skills through
            a B.Tech degree in ECE Engineering from VIT Vellore. My passion for
            storytelling and human-centered design fuels my exploration of
            innovative strategies for brands to engage with their audiences
            effectively. Continuously inspired and driven by curiosity, I thrive
            on pushing creative boundaries and delivering exceptional user
            experiences."
          </div>
        </div>
      </div>
      <div className="aboutpage3">
        <div className="whatidohead exphead">
          <div className="whatidocircle"></div>
          <div className="whatidoheadcontent">My Experience</div>
        </div>
        <div className="educationsection">
          <div className="educationcard">
            <div className="educationimage img3"></div>
            <div className="educationdetails">
              <div className="educationhead">Automate Vellore</div>
              <div className="educationcollege">April 2023 - Present</div>
              <div className="educationcollege">
                Developed a platform from which Autorickshaws can be booked
                effortlessly in vellore. Reducing the standard Fares by 30% in
                Vellore. Providing Employement to More than 20 Autodrivers.
              </div>
              <div className="educationsession">Founder | CTO</div>
            </div>
          </div>
          <div className="educationcard">
            <div className="educationimage img4"></div>
            <div className="educationdetails">
              <div className="educationhead">Solero Ceramics</div>
              <div className="educationcollege">Jun 2024 - July 2024</div>
              <div className="educationcollege">
                Developed the Offical Page for the Creamic Tiles Manufacturing
                Company Based in Gujarat, India. Showcasing Their Products
                ,Catalogues and Manufacturing Facilitie Present in Gujarat.
              </div>
              <div className="educationsession">
                Full Stack Website Developer
              </div>
            </div>
          </div>
          <div className="educationcard">
            <div className="educationimage img6"></div>
            <div className="educationdetails">
              <div className="educationhead">Studize</div>
              <div className="educationcollege">Feb 2024 - March 2024</div>
              <div className="educationcollege">
                Developed Some Crucial Features of the App such as Syllabus
                Tracking System , Dynamic Notification System , Integrated a
                Fully Functional Chatbot. Contributing to almost 50% of the
                Complete Application and increasing the Team Efficiency by 30%
              </div>
              <div className="educationsession">
                Cross Platform App Developer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lastpage">
        <Marquee
          className="aboutmemarquee aboutmarq"
          speed={40}
          autoFill={true}
          loop={0}
          direction="right"
        >
          <img src="reactjs.png" alt="" className="skillimage marqimg" />
          <img src="NEXTJS.png" alt="" className="skillimage marqimg" />
          <img src="nodejs.png.png" alt="" className="skillimage marqimg" />
          <img src="javascript.png" alt="" className="skillimage marqimg" />
          <img src="typescript.png" alt="" className="skillimage marqimg" />
          <img src="java.png" alt="" className="skillimage marqimg" />
          <img src="dart.png" alt="" className="skillimage marqimg" />
          <img src="python.png" alt="" className="skillimage marqimg" />
          <img src="git.png" alt="" className="skillimage marqimg" />
          <img src="github.png" alt="" className="skillimage marqimg" />
          <img src="flutter.png" alt="" className="skillimage marqimg" />
          <img src="firebase.png" alt="" className="skillimage marqimg" />
          <img src="reactjs.png" alt="" className="skillimage marqimg" />
          <img src="NEXTJS.png" alt="" className="skillimage marqimg" />
          <img src="nodejs.png.png" alt="" className="skillimage marqimg" />
          <img src="javascript.png" alt="" className="skillimage marqimg" />
          <img src="typescript.png" alt="" className="skillimage marqimg" />
          <img src="java.png" alt="" className="skillimage marqimg" />
          <img src="dart.png" alt="" className="skillimage marqimg" />
          <img src="python.png" alt="" className="skillimage marqimg" />
          <img src="git.png" alt="" className="skillimage marqimg" />
          <img src="github.png" alt="" className="skillimage marqimg" />
          <img src="flutter.png" alt="" className="skillimage marqimg" />
          <img src="firebase.png" alt="" className="skillimage marqimg" />
          <img src="reactjs.png" alt="" className="skillimage marqimg" />
          <img src="NEXTJS.png" alt="" className="skillimage marqimg" />
          <img src="nodejs.png.png" alt="" className="skillimage marqimg" />
          <img src="javascript.png" alt="" className="skillimage marqimg" />
          <img src="typescript.png" alt="" className="skillimage marqimg" />
          <img src="java.png" alt="" className="skillimage marqimg" />
          <img src="dart.png" alt="" className="skillimage marqimg" />
          <img src="python.png" alt="" className="skillimage marqimg" />
          <img src="git.png" alt="" className="skillimage marqimg" />
          <img src="github.png" alt="" className="skillimage marqimg" />
          <img src="flutter.png" alt="" className="skillimage marqimg" />
          <img src="firebase.png" alt="" className="skillimage marqimg" />
        </Marquee>
      </div>
    </div>
  );
}
