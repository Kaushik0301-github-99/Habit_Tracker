import React from "react";
import Habit from "./Habit.module.css";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { REMOVE_HABIT } from "../redux/Actions";

const HabitComponent = (props) => {
  const { items } = props;
  const dispatch = useDispatch();

  const handleDeleteHabit = () => {
    dispatch({ type: REMOVE_HABIT, payload: items });
  };

  const getTimeAfterConverting = (time) => {
    const dateTimeObject = new Date(items.time);
    const getFormattedTime = `${dateTimeObject.getHours()} : ${dateTimeObject.getMinutes()}`;
    return getFormattedTime;
  };
  return (
    <div className={Habit.table}>
      <div>{items.habitTitle}</div>
      <div>{items.habitDescription}</div>
      <div>{getTimeAfterConverting(items.time)}</div>
      <AiFillDelete className={Habit.btn} onClick={handleDeleteHabit} />
    </div>
  );
};

export default HabitComponent;
