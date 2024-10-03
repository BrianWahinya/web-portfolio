import { createContext, useContext, useReducer } from "react";

const initialState = {
  lang: "en",
  tabs: ["main"],
  activeTab: "main",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "changeLang":
      return { ...state, lang: payload };
    case "addTab":
      return state.tabs.includes(payload)
        ? state
        : { ...state, tabs: [...state.tabs, payload], activeTab: payload };
    case "closeTab":
      const currentIdx = state.tabs.findIndex((tab) => tab === payload);
      return {
        ...state,
        tabs: state.tabs.filter((tab) => tab !== payload),
        activeTab: state.tabs[currentIdx - 1],
      };
    case "openTab":
      return { ...state, activeTab: payload };
    default:
      return state;
  }
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeLang = (lang) => {
    dispatch({ type: "changeLang", payload: lang });
  };

  const addTab = (tab) => {
    dispatch({ type: "addTab", payload: tab });
  };

  const closeTab = (tab) => {
    dispatch({ type: "closeTab", payload: tab });
  };

  const openTab = (tab) => {
    dispatch({ type: "openTab", payload: tab });
  };

  return (
    <AppContext.Provider
      value={{ ...state, changeLang, addTab, closeTab, openTab }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext can only be used within AppProvider");
  }
  return ctx;
};

export { AppProvider, useAppContext };
