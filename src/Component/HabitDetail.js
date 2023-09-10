import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import habit from "./Habit.module.css";
import { NOT_MARKED, SUCCESS } from "../Custom_hook/Constant";
import { MdDoneOutline } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import { useEffect, useState } from "react";
const HabitDetail = ({ match }) => {
  const items = useSelector((state) => state.habit.items);
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(items);
  console.log(location);
  console.log(items[location.state.key]);
  console.log(items[location.state.key]?.habitStatus);

  // const changeStatus = () => {
  //   dispatch();
  // };
  return (
    <>
      {items.length !== 0 && (
        <div className={habit.parent}>
          <div className={habit.date}>
            {Object.keys(items[location.state.key]?.habitStatus) ?? "NAN"}
          </div>
          <div className={habit.status}>
            {Object.values(items[location.state.key]?.habitStatus) ??
            "NOT_MARKED" === NOT_MARKED ? (
              <IoCheckmarkDoneCircleOutline />
            ) : Object.values(items[location.state.key]?.habitStatus) ===
              SUCCESS ? (
              <MdDoneOutline />
            ) : (
              <ImCancelCircle />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HabitDetail;
