import { Header } from "../../Components";
import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.not_found_wrap}>
      <Header />
      <div className={styles.not_found}>
        <div className={styles.not_found_head}>
          <img src="/error.svg" alt={styles.error_img} />
        </div>
        <div className={styles.not_found_body}>
          <p>
            JOJO try to fix things... <span>Say hi to JOJO</span> 👋
          </p>
          <p>Don&apos;t worry there is a way to go back home!</p>
          <div className={styles.not_found_btn}>
            <button onClick={() => navigate("/")}>Back to home </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
