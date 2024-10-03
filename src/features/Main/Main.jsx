import { Fragment } from "react";
import { useAppContext } from "../../context/AppContext";
import useMain from "../../hooks/useMain";
import { Toolbar } from "../../components";

import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Work from "../Work/Work";
import Education from "../Education/Education";
import Certifications from "../Certifications/Certifications";
import Help from "../Help/Help";

import "./css/main.css";

const obj = {
  main: <Home />,
  profile: <Profile />,
  projects: <Projects />,
  contacts: <Contact />,
  work: <Work />,
  education: <Education />,
  certifications: <Certifications />,
};

const inlineObj = {
  help: <Help />,
};

const TerminalOutput = ({ item }) => {
  const { trigger, content } = item;
  return (
    <Fragment>
      <div className="terminal_prompt">
        <span className="terminal_user">brian@terminal:</span>
        <span className="terminal_tilde">~</span>
        <span className="terminal_dollar">$</span>
        <span className="terminal_input">{trigger}</span>
      </div>
      {content && (
        <>
          {inlineObj[content] ? (
            <>
              {inlineObj[content]}
              <br />
            </>
          ) : obj[content] ? (
            ""
          ) : (
            <>
              <span className="answers">{content}</span>
              <br />
            </>
          )}
        </>
      )}
    </Fragment>
  );
};

const Comp = ({ children }) => {
  const { data, inputRef, activeTab } = useMain({ help: <Help /> });

  return (
    <>
      {children}
      {
        <>
          {data &&
            data.map((item, idx) => (
              <TerminalOutput
                key={`${idx}_${item.trigger}`}
                idx={idx}
                item={item}
              />
            ))}
        </>
      }
      <p className="p-comment">
        # Type "help" to view available commands... <br />
      </p>
      <div className="terminal_prompt">
        <span className="terminal_user">brian@terminal:</span>
        <span className="terminal_tilde">~</span>
        <span className="terminal_dollar">$</span>
        {inputRef && (
          <input
            className="terminal_input"
            type="text"
            ref={inputRef}
            key={`${activeTab}_input`}
            placeholder="Type something..."
          />
        )}

        {/* <span className="terminal_cursor"></span> */}
      </div>
    </>
  );
};

const Main = () => {
  const { activeTab, closeTab, openTab, tabs } = useAppContext();
  return (
    <div className="div-main">
      <Toolbar
        closeTab={closeTab}
        openTab={openTab}
        tabs={tabs}
        activeTab={activeTab}
      />
      <div className="div-terminal">
        <Comp>{obj[activeTab]}</Comp>
      </div>
    </div>
  );
};

export default Main;
