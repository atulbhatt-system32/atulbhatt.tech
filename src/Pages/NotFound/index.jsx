import React from "react";
import Navbar from "../../Components/Navbar/index";
import error from "../../Assets/images/notFound/error.svg";
import styles from "./NotFound.module.scss";
const NotFound = () => {
  return (
    <div className={styles.not_found_wrap}>
      <Navbar />
      <div className={styles.not_found}>
        <div className={styles.not_found_head}>
          <img src={error} alt={styles.error_img} />
        </div>
        <div className={styles.not_found_body}>
          <p>
            JOJO try to fix things... <span>Say hi to JOJO</span> 👋
          </p>
          <p>Don't worry there is a way to go back home!</p>
          <div className={styles.not_found_btn}>
            <button>Back to home </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
