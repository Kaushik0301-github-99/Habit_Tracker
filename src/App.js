import React from "react";

import { useSelector } from "react-redux";
import HabitComponent from "./Component/HabitComponent";
import { Link } from "react-router-dom";
const App = () => {
  const habitItems = useSelector((state) => state.habit.items);
  console.log("calling habit in app.js", habitItems);
  return (
    <div>
      {habitItems.map((habit, index) => (
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="habitdetail"
        >
          <HabitComponent key={index} items={habit}></HabitComponent>
        </Link>
      ))}
    </div>
  );
};

export default App;
