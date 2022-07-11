import React from "react";
import styles from "./Styles.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export default function SideBar({ fun }) {
  return (
    <div
      className={styles.sidebar__wrap}
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), #222222",
      }}
    >
      <div className={styles.title}>
        <h1>Menu</h1>
        <div>
          <AiOutlineClose className="cursor-pointer " onClick={fun} />
        </div>
      </div>
      <div className={styles.sidebar_menu}>
        <div>Skills</div>
        <div>Projects</div>
        <div>Content</div>
        <div>About Me</div>
      </div>
      <div>
        <button className={styles.siderbar_button}>Resume</button>
      </div>
    </div>
  );
}
