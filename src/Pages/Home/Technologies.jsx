import React from "react";
import styles from "./Home.module.scss";
import { Images } from "../../Images";
import { BsArrowRight } from "react-icons/bs";

const TECHNOLOGY = [
  { text: "HTML", image: Images.html },
  { text: "CSS", image: Images.css },
  { text: "React", image: Images.react },
  { text: "Git", image: Images.git },
  { text: "JavaScript", image: Images.javascript },
];
export default function Technologies() {
  return (
    <div className="flex flex-wrap">
      {TECHNOLOGY.map((item) => {
        return (
          <div className={styles.technologies__wrap}>
            <div className={styles.technology}>
              <img src={item.image} alt="" />
            </div>
            <h1>{item.text}</h1>
          </div>
        );
      })}
      <div className="flex justify-center items-center text-16px">
        View More <BsArrowRight color="#5454D4" />
      </div>
    </div>
  );
}
