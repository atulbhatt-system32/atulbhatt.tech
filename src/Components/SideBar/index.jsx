import React from "react";
import styles from "./Styles.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
import { links, routes } from "../../static.db";

export default function SideBar({ fun }) {
  const { theme } = React.useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div
      className={styles.sidebar__wrap}
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), #222222"
            : "#ffffff",
      }}
    >
      <div className={`${styles.title} dark:text-white-900`}>
        <h1>Menu</h1>
        <div>
          <AiOutlineClose className="cursor-pointer " onClick={fun} />
        </div>
      </div>
      <div className={styles.sidebar_menu}>
        <div onClick={() => navigate(routes.skills.path)}>Skills</div>
        {/* <div onClick={() => navigate(routes.projects.path)}>Projects</div> */}
        <div onClick={() => navigate(routes.content.path)}>Content</div>
        <div onClick={() => navigate(routes.aboutMe.path)}>About Me</div>
      </div>
      <div>
        <button
          className={styles.siderbar_button}
          onClick={() => window.open(links.resume.url)}
        >
          Resume
        </button>
      </div>
    </div>
  );
}
