import { AiOutlineCode } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaTasks, FaRegCalendarAlt, FaSortAmountUpAlt } from "react-icons/fa";
import {
  FaGitAlt,
  FaGraduationCap,
  FaWhatsapp,
  FaRegFileCode,
  FaLaptopCode,
  FaCode,
  FaCodeBranch,
  FaChartColumn,
  FaReact,
  FaSquareJs,
  FaPython,
  FaJava,
  FaDocker,
  FaLinux,
  FaAws,
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaStackOverflow,
  FaLinkedinIn,
  FaInstagram,
  FaRegPaperPlane,
  FaPeopleRoof,
  FaRegFileWord,
} from "react-icons/fa6";
import { MdContactPhone, MdOutlineContactPhone } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { FiPhoneCall, FiExternalLink } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { GiSpiderWeb, GiConwayLifeGlider } from "react-icons/gi";
import { BsDatabaseFillGear } from "react-icons/bs";
import { MdApi } from "react-icons/md";
import { GrDocumentTest, GrMysql, GrCertificate } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { TiStopwatch, TiWeatherPartlySunny } from "react-icons/ti";
import {
  SiAwselasticloadbalancing,
  SiNginx,
  SiFastapi,
  SiSpring,
  SiSpringboot,
  SiGithubactions,
  SiApacheecharts,
  SiChartdotjs,
  SiPostgresql,
  SiMongodb,
  SiUnitednations,
} from "react-icons/si";

const iconObj = {
  logo: <FaLaptopCode />,
  code: <FaCode />,
  underscore: <AiOutlineCode />,
  profile: <CgProfile />,
  git: <FaGitAlt />,
  automation: <TbSettingsAutomation />,
  contacts: <MdOutlineContactPhone />,
  whatsapp: <FaWhatsapp />,
  email: <TfiEmail />,
  education: <FaGraduationCap />,
  work: <FaRegFileCode />,
  projects: <FaCodeBranch />,
  certifications: <GrCertificate />,
  web: <GiSpiderWeb />,
  db: <BsDatabaseFillGear />,
  api: <MdApi />,
  apitest: <GrDocumentTest />,
  dataviz: <FaChartColumn />,
  react: <FaReact />,
  js: <FaSquareJs />,
  python: <FaPython />,
  java: <FaJava />,
  docker: <FaDocker />,
  linux: <FaLinux />,
  aws: <FaAws />,
  proxy: <SiAwselasticloadbalancing />,
  nginx: <SiNginx />,
  fastapi: <SiFastapi />,
  springboot: <SiSpring />,
  github: <FaGithub />,
  gitlab: <FaGitlab />,
  bitbucket: <FaBitbucket />,
  githubactions: <SiGithubactions />,
  echarts: <SiApacheecharts />,
  chartjs: <SiChartdotjs />,
  mongo: <SiMongodb />,
  postgres: <SiPostgresql />,
  mysql: <GrMysql />,
  stackoverflow: <FaStackOverflow />,
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
  phone: <FiPhoneCall />,
  address: <FaRegPaperPlane />,
  community: <FaPeopleRoof />,
  undrr: <SiUnitednations />,
  uneclac: <SiUnitednations />,
  externallink: <FiExternalLink />,
  conway: <GiConwayLifeGlider />,
  taskmanager: <FaTasks />,
  stopwatch: <TiStopwatch />,
  weather: <TiWeatherPartlySunny />,
  wordle: <FaRegFileWord />,
  calendar: <FaRegCalendarAlt />,
  sortingalgo: <FaSortAmountUpAlt />,
};

const Icon = ({ id }) => {
  return iconObj[id];
};
export default Icon;
