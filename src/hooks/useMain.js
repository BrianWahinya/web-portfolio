import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { CONFIGS } from "../helpers/configs";

const inlineCommands = ["help"];

const useMain = () => {
  const inputObj = {};
  const { activeTab, addTab, openTab, tabs } = useAppContext();

  const [section, setSection] = useState(
    tabs.reduce((accum, curr) => {
      accum[curr] = {
        data: [],
        counter: 0,
      };
      return accum;
    }, {})
  );

  tabs.forEach((tab) => {
    if (!inputObj?.[tab]) {
      inputObj[tab] = React.createRef();
    }
  });

  // console.log(activeTab, tabs, inputObj);

  useEffect(() => {
    const keypress = (e) => {
      const { data, counter } = section?.[activeTab] || {
        data: [],
        counter: 0,
      };
      const uniqueTriggers = data?.length
        ? [
            ...new Set(
              data
                .filter((item) => item.trigger)
                .map((item) => item.trigger)
                .reverse()
            ),
          ].reverse()
        : [];

      const key = e.key.toLowerCase();
      //   console.log(counter, uniqueTriggers);
      if (
        key === "arrowdown" &&
        uniqueTriggers.length > 0 &&
        !(counter + 1 >= uniqueTriggers.length)
      ) {
        // console.log("down", counter);
        inputObj[activeTab].current.value = uniqueTriggers[counter + 1];
        setSection((prev) => {
          const x = prev[activeTab];
          return {
            ...prev,
            [activeTab]: {
              ...x,
              counter: x.counter + 1,
            },
          };
        });
        return;
      }

      if (
        key === "arrowup" &&
        uniqueTriggers.length > 0 &&
        !(counter - 1 < 0)
      ) {
        // console.log("up", counter);
        inputObj[activeTab].current.value = uniqueTriggers[counter - 1];
        setSection((prev) => {
          const x = prev[activeTab];
          return {
            ...prev,
            [activeTab]: {
              ...x,
              counter: x.counter - 1,
            },
          };
        });
        return;
      }

      if (key === "enter") {
        // console.log(activeTab, tabs, inputObj);
        const val =
          inputObj[activeTab].current?.value.trim().toLowerCase() || "";
        if (["cls", "clear"].includes(val)) {
          setSection((prev) => ({
            ...prev,
            [activeTab]: {
              data: [],
              counter: 0,
            },
          }));
          inputObj[activeTab].current.value = "";
          return;
        }
        const cmd = CONFIGS.commands?.[val?.replace(" ", "")];
        const output = cmd ? cmd : val === "" ? "" : "input valid command";

        setSection((prev) => {
          const y = prev[activeTab];
          const x = [...(y?.data || []), { trigger: val, content: output }];
          const counter = val
            ? [...new Set([...uniqueTriggers, val])].length
            : y?.counter || 0;
          return {
            ...prev,
            [activeTab]: {
              ...y,
              data: x,
              counter,
            },
          };
        });

        if (cmd && !inlineCommands.includes(cmd)) {
          addTab(cmd);
          openTab(cmd);
        }

        // if (val) {
        //   setSection((prev) => {
        //     const y = prev[activeTab];
        //     return {
        //       ...prev,
        //       [activeTab]: {
        //         ...y,
        //         counter: [...new Set([...uniqueTriggers, val])].length,
        //       },
        //     };
        //   });
        // }

        if (!inputObj?.[activeTab]?.current?.value) {
          inputObj[activeTab] = React.createRef("");
          return;
        }
        inputObj[activeTab].current.value = "";
      }
    };
    document.addEventListener("keydown", keypress);

    const focus = () => {
      if (inputObj?.[activeTab]?.current) {
        inputObj?.[activeTab].current.focus();
      }
    };
    focus();
    document.querySelector(".div-main").addEventListener("click", focus);

    return () => {
      document.removeEventListener("keydown", keypress);
      document.querySelector(".div-main")?.removeEventListener("click", focus);
    };
  }, [activeTab, tabs, section[activeTab]?.data, section[activeTab]?.counter]);

  return {
    data: section[activeTab]?.data || [],
    inputRef: inputObj[activeTab],
    activeTab: activeTab,
  };
};

export default useMain;
