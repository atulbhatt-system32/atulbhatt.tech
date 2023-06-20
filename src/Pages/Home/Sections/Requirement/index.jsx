import Container from "../../../../Components/Container";
import Cursor from "../../../../assets/images/home/cursor.svg";
import styles from "../../Home.module.scss";
import { useNavigate } from "react-router-dom";
const Requirement = () => {
  const navigate = useNavigate();
  return (
    <section className="dark:bg-black-200">
      <Container className={` ${styles.required__wrap}`}>
        <div className={styles.title}>
          Do you have a project that you want to be done? Check out if my skills
          matches your requirements
        </div>
        <div className={styles.btn__wrap} onClick={() => navigate("skills")}>
          <button className={styles.btn}>
            <img src={Cursor} alt="cursor" />
            <div className={styles.btn_text}>Here</div>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Requirement;
