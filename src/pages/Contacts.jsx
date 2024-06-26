import { Helmet } from 'react-helmet';
export default function ContactsPage() {
  return (
    <div className="contactspage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Get in Touch | Abhishek Jain's Portfolio | Web Developer | Cross
          Platform Application Developer
        </title>
      </Helmet>
      <div className="projectpage1">
        <div className="projectpage1head">
          <div className="head">
            <div className="projectcircle"></div>
            <div className="projectheadcontent">Contact Me</div>
          </div>
          <div className="projectsubhead">
            Let's Bring Your Ideas to Life Together.
          </div>
        </div>
      </div>
      <div className="contactpage2">
        <a href="mailto:jainabhishek1904@gmail.com">
          <img
            src="/contactcard1.png"
            alt="contact card"
            className="contactcards"
          />
        </a>
        <a href="mailto:jainabhishek1904@gmail.com">
          <img
            src="/contactcard2.png"
            alt="contact card"
            className="contactcards"
          />
        </a>
      </div>
    </div>
  );
}
