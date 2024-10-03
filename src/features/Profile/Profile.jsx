import { Icon } from "../../components";
import "./css/profile.css";

const skills = [
  { id: "web", name: "Web-dev" },
  { id: "dataviz", name: "Data visualization" },
  { id: "api", name: "Api-dev" },
  { id: "apitest", name: "Api testing" },
  { id: "db", name: "Database design" },
];

const techs = [
  {
    id: "js",
    name: "JavaScript",
    data: [
      { id: "react", name: "ReactJs" },
      { id: "echarts", name: "EchartsJs" },
      { id: "chartjs", name: "ChartJs" },
    ],
  },
  { id: "python", name: "Python", data: [{ id: "fastapi", name: "FastApi" }] },
  {
    id: "java",
    name: "Java",
    data: [{ id: "springboot", name: "SpringBoot" }],
  },
  {
    id: "db",
    name: "Database",
    data: [
      { id: "mysql", name: "MySql" },
      { id: "postgres", name: "Postgres" },
      { id: "mongo", name: "MongoDb" },
    ],
  },
  {
    id: "git",
    name: "Git",
    data: [
      { id: "github", name: "Github" },
      { id: "gitlab", name: "Gitlab" },
    ],
  },
  {
    id: "proxy",
    name: "Proxy & L.B.",
    data: [{ id: "nginx", name: "Nginx" }],
  },
  {
    id: "automation",
    name: "Automation",
    data: [{ id: "githubactions", name: "Github Actions" }],
  },
  {
    id: "aws",
    name: "AWS",
    data: [
      { id: "ecr", name: "ECR" },
      { id: "ec2", name: "EC2" },
    ],
  },
  { id: "linux", name: "Linux" },
  { id: "docker", name: "Docker" },
];

const Profile = () => {
  const currentYear = new Date().getFullYear();
  const yearDiff = currentYear - 2018;
  return (
    <div className="div-profile">
      <p className="p-title">
        **********************************************************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About
        Me&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        **********************************************************
      </p>
      <p className="p-years">
        Experienced Software Engineer with {yearDiff}+ years expertise in:
      </p>
      <div className="div-skills">
        {skills.map((item) => {
          const { id, name } = item;
          return (
            <div key={`skill_${id}`} className="div-skill">
              <Icon id={id} />
              <p className="p-skill">{name}</p>
            </div>
          );
        })}
      </div>
      <p className="p-technologies">Technologies used:</p>
      <div className="div-techs">
        {techs.map((item) => {
          const { id, name, data } = item;
          return (
            <div key={`tech_${id}`} className="div-tech">
              <Icon id={id} />
              <p className="p-tech">{name}</p>

              {data && (
                <>
                  <hr />
                  <div className="div-brands">
                    {data.map((brand) => {
                      const { id, name } = brand;
                      return (
                        <div
                          key={`brand_${item.id}_${id}`}
                          className="div-brand"
                        >
                          <Icon id={id} />
                          <p className="p-brand">{name}</p>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Profile;
