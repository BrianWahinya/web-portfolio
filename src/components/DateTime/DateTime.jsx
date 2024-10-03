import { useLayoutEffect, useRef } from "react";
import "./css/datetime.css";

const days = {
  1: "Sun",
  2: "Mon",
  3: "Tue",
  4: "Wed",
  5: "Thu",
  6: "Fri",
  7: "Sat",
};
const currentDateTime = () => {
  const date = new Date();
  // const hours = String(date.getHours()).padStart(2, "0");
  // const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  // return `${days[
  //   date.getDay() + 1
  // ].toUpperCase()} ${hours}:${minutes}:${seconds} `;
  return date;
};
const DateTime = () => {
  const datetimeRef = useRef(null);
  useLayoutEffect(() => {
    datetimeRef.current.textContent = currentDateTime();
    const interval = setInterval(() => {
      datetimeRef.current.textContent = currentDateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <p ref={datetimeRef} className="p-datetime"></p>;
};
export default DateTime;
