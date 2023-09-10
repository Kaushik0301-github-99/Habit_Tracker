import React, { useState } from "react";
import navbar from "./NavBar.module.css";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useSelector, useDispatch } from "react-redux";
import useChangeValue from "../Custom_hook/useChange";
import { ADD_HABIT } from "../redux/Actions";
import { Calendar } from "primereact/calendar";
import { Link } from "react-router-dom";
import { NOT_MARKED } from "../Custom_hook/Constant";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const habitItem = useSelector((state) => state.habit.items);
  const dispatch = useDispatch();
  const habitTitle = useChangeValue("");
  const habitDescription = useChangeValue("");
  const [dateTime12h, setDateTime12h] = useState("");
  const onClickSubmit = () => {
    dispatch({
      type: ADD_HABIT,
      payload: {
        id: habitItem.length + 1,
        habitTitle: habitTitle.value,
        habitDescription: habitDescription.value,
        time: dateTime12h,
        habitStatus: { [new Date().getDate()]: NOT_MARKED },
      },
    });
    console.log("habit items in navbar.js", habitItem);
    setVisible(false);
  };

  const onClickCancel = () => {
    setVisible(false);
  };

  const onClickAdd = () => {
    setVisible(true);
  };

  const onClickHide = () => {
    setVisible(false);
  };

  const footerContent = (
    <div>
      <Button
        label="cancel"
        icon="pi pi-times"
        onClick={onClickCancel}
        className="p-button-text"
      ></Button>
      <Button
        label="submit"
        icon="pi pi-check"
        onClick={onClickSubmit}
        autoFocus
      />
    </div>
  );

  return (
    <div className={navbar.navbar}>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <div style={{ cursor: "pointer", color: "black" }}>Detail View</div>
      </Link>
      <Button
        className={navbar.btn}
        label="New Habit"
        icon="pi pi-external-link"
        onClick={onClickAdd}
      />
      <Dialog
        header="Habit"
        visible={visible}
        style={{ width: "50vw", top: "100px" }}
        onHide={onClickHide}
        footer={footerContent}
      >
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <label>Habit Title</label>
          <input
            style={{ height: "44px", width: "233px", border: "red 1px solid" }}
            value={habitTitle.value}
            onChange={habitTitle.onchange}
          ></input>
          <label>Describe it</label>
          <input
            style={{ height: "44px", width: "233px", border: "red 1px solid" }}
            value={habitDescription.value}
            onChange={habitDescription.onchange}
          ></input>
          <label>Time</label>
          <Calendar
            value={dateTime12h}
            onChange={(e) => setDateTime12h(e.value)}
            showTime
            hourFormat="24"
            style={{ border: "red 1px solid" }}
            timeOnly
          />
        </form>
      </Dialog>
    </div>
  );
};

export default NavBar;
