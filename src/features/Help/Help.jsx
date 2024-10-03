import "./css/help.css";

const commands = [
  { cmd: "Cls, Clear", desc: "Clear the terminal" },
  {
    cmd: "Prof, Profile, About, Brian, Whois",
    desc: "Display about me and basic details",
  },
  { cmd: "Work, Experience", desc: "Display past & current work experiences" },
  { cmd: "Proj, Projects", desc: "Display all projects I have worked on" },
  {
    cmd: "Educ, Education, School",
    desc: "Display education levels",
  },
  { cmd: "Ctc, Contacts", desc: "Display contact info" },
  { cmd: "Cert, Certifications", desc: "Display certifications" },
];
const Help = () => {
  return (
    <div className="answers div-help">
      <h4>Help Menu</h4>
      <div className="div-topic">
        <p className="title">Description</p>
        <span>
          Displays help about cmdlets and concepts.
          <br />
          Type a desired command in the input-box to return related info.
        </span>
      </div>
      <div className="div-topic">
        <p className="title">Commands</p>
        <div className="help-commands">
          {commands.map((item) => {
            const { cmd, desc } = item;
            return (
              <div key={cmd} className="help-command">
                <p className="p-command">{cmd.toLowerCase()}</p>
                <p className="p-desc">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Help;
