import { Helmet } from 'react-helmet';
export default function Reorder() {
  return (
    <div className="livitpage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Project Reorder | Abhishek Jain | App Developer</title>
      </Helmet>
      <div className="indprojectpage1">
        <div className="indprojecthead">
          <div className="indcircle"></div>
          <div className="indheadcontent">Reorder</div>
        </div>
        <div className="indprojectsubhead">
          Inventory and Order Management System: Reorder streamlines inventory
          tracking and order management, helping businesses monitor stock
          levels, manage orders, and improve operational efficiency with an
          intuitive interface.
        </div>
      </div>
      <a
        href="https://inventory-azure-one.vercel.app/"
        className="indprojectpage2"
      >
        <img src="/reordermockup.png" alt="" className="indfirstimg" />
      </a>
      <div className="indskillsusedpage">
        <div className="indpage3head">Skills Used</div>
        <div className="indskillstagdiv">
          <div className="indskilltag">Web Development</div>
          <div className="indskilltag">Responsive Web Designing</div>
          {/* <div className="indskilltag">Backend Development</div> */}
          <div className="indskilltag">E-Commerce</div>
          <div className="indskilltag">UI UX Designing</div>
          <div className="indskilltag">DATABASE MANAGEMENT</div>
          <div className="indskilltag">React JS</div>

          <div className="indskilltag">Inventory Management</div>
        </div>
      </div>
      <div className="indlogopage">
        <div className="indpage3head">Branding</div>
        <div className="logodiv">
          <div className="logoimg1">
            <img
              src="/reorderimages/reorderlogo.png"
              alt=""
              className="logodivimg"
            />
          </div>
          <div className="logoimg2">
            <img
              src="/reorderimages/reorderindmockup.png"
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
              src="/reorderimages/reorder1.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/reorderimages/reorder2.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/reorderimages/reorder3.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/reorderimages/reorder4.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
          <div className="indimagecardmonitor">
            <img
              src="/reorderimages/reorder5.png"
              alt="livit1"
              className="indimageimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
