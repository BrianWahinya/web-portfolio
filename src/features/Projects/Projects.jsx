import { Icon } from "../../components";
import logo_eclac from "../../assets/logo_eclac.png";
import logo_oig from "../../assets/logo_oig.png";
import logo_yearbook from "../../assets/logo_yearbook.png";
import logo_sdg from "../../assets/logo_sdg.png";
import logo_opcc from "../../assets/logo_opcc.svg";
import "./css/projects.css";

const companyProjects = [
  {
    id: "ods",
    name: "SDG Survey",
    client: "UN-ECLAC",
    role: "Front-end Dev",
    desc: "",
    link: "https://statistics.cepal.org/charts/ods/catalogue/prod/",
  },
  {
    id: "opcc",
    icon: logo_opcc,
    name: "Parliamentary Observatory on Climate Change (OPCC)",
    client: "UN-ECLAC",
    role: "Front-end Dev",
    desc: "",
    link: "https://opcc.cepal.org/en/tracker/general-overview",
  },
  {
    id: "oig",
    icon: logo_oig,
    name: "Gender Equality Observatory (OIG)",
    client: "UN-ECLAC",
    role: "Front-end Dev",
    desc: "",
    link: "https://oig.cepal.org/en",
  },
  {
    id: "sdggateway",
    icon: logo_sdg,
    name: "SDG Gateway",
    client: "UN-ECLAC",
    role: "Front-end Dev",
    desc: "",
    link: "https://agenda2030lac.org/estadisticas/regional-sdg-statistical-profiles-target-1.html?lang=en",
  },
  {
    id: "yearbook",
    icon: logo_yearbook,
    name: "Statistical Yearbook",
    client: "UN-ECLAC",
    role: "Front-end Dev",
    desc: "",
    link: "https://statistics.cepal.org/yearbook/2023/statistics.html?lang=en&theme=social",
  },
  {
    id: "cepalstat",
    icon: logo_eclac,
    name: "CepalStat",
    client: "UN-ECLAC",
    role: "Front-end Dev",
    desc: "",
    link: "https://statistics.cepal.org/portal/cepalstat/index.html?lang=en",
  },
  {
    id: "icp",
    name: "International Comparison Program",
    client: "UN-ECLAC",
    role: "Full-stack Dev",
    desc: "",
  },
];

const personalProjects = [
  {
    id: "conway",
    name: "Conway Game of Life",
    desc: "",
    link: "https://brian-react-conway-game-of-life.netlify.app/",
  },
  {
    id: "taskmanager",
    name: "Task Manager",
    desc: "",
    link: "https://brian-react-todo.netlify.app/",
  },
  {
    id: "weather",
    name: "Weather",
    desc: "",
    link: "https://brian-react-weather-app.netlify.app/",
  },
  {
    id: "wordle",
    name: "Wordle Game",
    desc: "",
    link: "https://brian-react-wordle-game.netlify.app/",
  },
  {
    id: "stopwatch",
    name: "Stopwatch",
    desc: "",
    link: "https://brian-react-stopwatch.netlify.app/",
  },
  // {
  //   id: "calendar",
  //   name: "Calendar-Clock",
  //   desc: "",
  //   link: "https://brian-react-clock.netlify.app/",
  // },
  {
    id: "sortingalgo",
    name: "Sorting Algorithms",
    desc: "",
    link: "https://brian-react-sorting-algorithms.netlify.app/",
  },
];

const mastersProjects = [
  {
    id: "newsapp",
    name: "News App",
    desc: "",
    link: "https://jkuatmsc-group1-newsapp.netlify.app/",
  },
  {
    id: "uniweb",
    name: "University App",
    desc: "",
    link: "https://jkuatmsc-uniapp.000webhostapp.com/",
  },
  {
    id: "bankapp",
    name: "Bank App dashboard",
    desc: "",
    link: "https://jkuatbenkiuniapp.000webhostapp.com/",
  },
  {
    id: "world_wonders",
    name: "8 World Wonders",
    desc: "",
    link: "https://jkuatmscgroup1.netlify.app/",
  },
];

const small_icons = ["oig", "sdggateway", "yearbook"];

const Projects = () => {
  return (
    <div className="div-projects">
      <p className="p-title">
        **********************************************************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        ***************&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;****************
        <br />
        **********************************************************
      </p>
      <div className="div-company">
        <p className="p-project-type">External clients</p>
        {companyProjects.map((item) => {
          const { id, icon, name, client, role, desc, link } = item;
          return (
            <a
              key={`projects_company_${id}`}
              className={`a-project ${!link ? "a-disabled" : ""}`}
              href={link}
              rel="noreferrer noopener"
              target="_blank"
            >
              {icon && (
                <div className="div-logo">
                  <img
                    src={icon}
                    alt={`logo ${name}`}
                    className={small_icons.includes(id) ? "smaller" : ""}
                  />
                </div>
              )}
              <div className="div-content">
                <p className="p-name">{name}</p>
                <p className="p-client">{client}</p>
                <p>{role}</p>
                <p>{desc}</p>
              </div>
            </a>
          );
        })}
      </div>
      <div className="div-personal">
        <p className="p-project-type">Personal</p>
        {personalProjects.map((item) => {
          const { id, name, desc, link } = item;
          return (
            <a
              key={`projects_personal_${id}`}
              className="a-project"
              href={link}
              rel="noreferrer noopener"
              target="_blank"
            >
              <p className="p-name">
                <Icon id={id} />
                <span>{name}</span>
              </p>
              <p>{desc}</p>
            </a>
          );
        })}
      </div>
      <div className="div-masters">
        <p className="p-project-type">Masters</p>
        {mastersProjects.map((item) => {
          const { id, name, desc, link } = item;
          return (
            <a
              key={`projects_masters_${id}`}
              className="a-project"
              href={link}
              rel="noreferrer noopener"
              target="_blank"
            >
              <p className="p-name">{name}</p>
              <p>{desc}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
