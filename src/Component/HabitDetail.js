import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HabitDetail = () => {
  const items = useSelector((state) => state.habit.items);
  console.log("items in habitdetail", items);
  console.log("here", items[0].time);
  const extractDate = (date) => {
    const _date = new Date(date);
    return _date.getDate();
  };
  return <div>{extractDate(27)}</div>;
};

export default HabitDetail;
