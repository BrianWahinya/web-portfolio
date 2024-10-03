import { Fragment } from "react";
import Certifications from "../Certifications/Certifications";
import "./css/education.css";

const courses = [
  {
    id: "masters",
    name: "Master's",
    course: "Software Engineering",
    school: "Jomo Kenyatta University of Agri.&Tech (Jkuat)",
    duration: "2022 - Current",
  },
  {
    id: "degree",
    name: "Bachelor of Science (BSc.)",
    course: "Information and Communication Technology (ICT)",
    school: "Jaramogi O.O. University of Sci.&Tech (Jooust)",
    duration: "2014 Jan - 2018 March",
  },
];
const Education = () => {
  return (
    <>
      <div className="div-education">
        <p className="p-title">
          **********************************************************
          <br />
          ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
          <br />
          ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Education&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
          <br />
          ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
          <br />
          **********************************************************
        </p>
        <div className="div-courses">
          {courses.map((item, idx) => {
            const { id, name, course, school, duration } = item;
            return (
              <Fragment key={`educ_course_${id}`}>
                <div className="div-course">
                  <p className="p-name">{name}</p>
                  <p className="p-course">{course}</p>
                  <p className="p-school">{school}</p>
                  <p className="p-duration">{duration}</p>
                </div>
                {idx !== courses.length - 1 && <hr />}
              </Fragment>
            );
          })}
        </div>
      </div>
      <Certifications />
    </>
  );
};
export default Education;
