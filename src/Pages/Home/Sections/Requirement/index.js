import React from "react";
import Container from "../../../../Components/Container";
import Cursor from "../../../../Assets/images/home/cursor.svg";
import styles from "../../Home.module.scss";
const Requirement = () => {
  return (
    <section>
      <Container className={` ${styles.reuired__wrap}`}>
        <div className={styles.title}>
          Do you have a project that you want to be done? Check out if my skills
          matches your requirements
        </div>
        <div className="self-center rounded-md bg-transparent-dark">
          <button className="flex items-center gap-2.5 p-3">
            <img src={Cursor} alt="cursor" />
            <div className="font-medium text-2xl ">Here</div>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Requirement;
