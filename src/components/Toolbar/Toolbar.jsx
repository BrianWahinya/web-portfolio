import Icon from "../Icon/Icon";
import "./css/toolbar.css";

const Toolbar = ({ tabs, closeTab, openTab, activeTab }) => {
  return (
    <div className="div-toolbar">
      {/* <div className="butt">
      <button className="btn btn-color"></button>
      <button className="btn"></button>
      <button className="btn"></button>
    </div> */}
      {/* <p className="user">brianwahinya@software-dev: ~</p> */}

      {tabs.map((tab, idx) =>
        tab === "main" ? (
          <div
            key={`${idx}_${tab}`}
            className={`div-button ${activeTab === "main" ? "active-tab" : ""}`}
          >
            <button
              className="btn-tab"
              onClick={() => activeTab !== "main" && openTab("main")}
            >
              <Icon id="code" />
              <span>software-dev@terminal</span>
            </button>
          </div>
        ) : (
          <div
            key={`${idx + 1}_${tab}`}
            className={`div-button ${activeTab === tab ? "active-tab" : ""}`}
          >
            <button
              className="btn-tab"
              onClick={() => activeTab !== tab && openTab(tab)}
            >
              <Icon id={tab} />
              <span>{tab}</span>
            </button>
            <button className="btn-close" onClick={() => closeTab(tab)}>
              X
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Toolbar;
