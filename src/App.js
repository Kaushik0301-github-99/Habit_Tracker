import React from "react";

import { useDispatch, useSelector } from "react-redux";
import HabitComponent from "./Component/HabitComponent";
import { Link } from "react-router-dom";
import { HABIT_STATUS } from "./redux/Actions";
const App = () => {
  const habitItems = useSelector((state) => state.habit.items);
  const dispatch = useDispatch();
  console.log("calling habit in app.js", habitItems);

  return (
    <div>
      {habitItems.map((habit, index) => (
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={{ pathname: "habitdetail/" }}
          state={{ key: index }}
          key={index}
        >
          <HabitComponent key={index} items={habit}></HabitComponent>
        </Link>
      ))}
    </div>
  );
};

export default App;
