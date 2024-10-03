import { Fragment } from "react";
import "./css/certifications.css";
const certifications = [
  {
    id: "datascience",
    name: "Certificate",
    cert: "Data Science, AI & ML",
    school: "Africa Data School",
    duration: "2021 March - Current",
  },
  {
    id: "react",
    name: "Certificate",
    cert: "React Dev",
    school: "Pontifical Catholic University of Chile",
    duration: "2022 August",
  },
  {
    id: "web_mobile",
    name: "Certificate",
    cert: "Web and Mobie App Dev",
    school: "Modcom",
    duration: "2018 Jan - 2018 May",
  },
];
const Certifications = () => {
  return (
    <div className="div-certifications">
      <p className="p-title">
        **********************************************************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Certifications&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        **********************************************************
      </p>
      <div className="div-certs">
        {certifications.map((item, idx) => {
          const { id, name, cert, school, duration } = item;
          return (
            <Fragment key={`cert_${id}`}>
              <div className="div-cert">
                <p className="p-cert">{cert}</p>
                <p className="p-school">{school}</p>
                <p className="p-duration">{duration}</p>
              </div>
              {idx !== certifications.length - 1 && <hr />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default Certifications;
