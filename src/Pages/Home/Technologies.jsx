import React from "react";
import styles from "./Home.module.scss";
import { Images } from "../../Images";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TECHNOLOGY = [
  { id: 1, text: "HTML", image: Images.html },
  { id: 2, text: "CSS", image: Images.css },
  { id: 3, text: "React", image: Images.react },
  { id: 4, text: "Git", image: Images.git },
  { id: 5, text: "JavaScript", image: Images.javascript },
];
export default function Technologies() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap">
      {TECHNOLOGY.map((item) => {
        return (
          <div className={styles.technologies__wrap} key={item.id}>
            <div className={styles.technology}>
              <img src={item.image} alt="" />
            </div>
            <h1>{item.text}</h1>
          </div>
        );
      })}
      <div
        className="flex justify-center items-center text-16px cursor-pointer p-4"
        onClick={() => navigate("skills")}
      >
        View More
        <BsArrowRight color="#5454D4" className="ml-3 mt-1 w-6 h-6" />
      </div>
    </div>
  );
}
