import { Icon } from "../../components";
import nbk_logo from "../../assets/react.svg";
import "./css/work.css";

const orgs = [
  {
    id: "uneclac",
    name: "United Nations (ECLAC)",
    date: "2018 - Current",
    job_title: "Full-Stack Developer",
    desc: "Worked on numerous applications<br/>(More info to be added soon)",
  },
  {
    id: "undrr",
    name: "United Nations (UNDRR)",
    date: "2022 Sep - 2023 Apr",
    job_title: "Full-Stack Developer Intern",
    desc: "Worked on numerous applications<br/>(More info to be added soon)",
  },
  {
    id: "nbk",
    name: "National Bank of Kenya",
    date: "2017 Feb - 2017 May",
    job_title: "ICT intern",
    desc: "Worked on numerous applications<br/>(More info to be added soon)",
  },
];

const Work = () => {
  return (
    <div className="div-work">
      <p className="p-title">
        **********************************************************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        **********************************************************
      </p>
      <div className="div-orgs">
        {orgs.map((item) => {
          const { id, name, date, job_title, desc } = item;
          const descs = desc.split("<br/>").map((param, idx) => (
            <span key={`desc_${id}_${idx}`}>
              {param}
              <br />
            </span>
          ));
          return (
            <div key={`work_org_${id}`} className="div-org">
              <Icon id={id} />
              {id === "nbk" && (
                <img src={nbk_logo} alt="nbk_logo" className="img_nbk" />
              )}
              <div id={`div-org-id-${id}`}>
                <p className="p-name">{name}</p>
                <p className="p-job-title">{job_title}</p>
                <p className="p-date">{date}</p>
                <p className="p-desc">{descs}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Work;
