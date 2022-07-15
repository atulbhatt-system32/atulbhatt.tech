import React from "react";
import styles from "../../Home.module.scss";
import { Container, Button } from "../../../../Components";
import { QueryImg } from "../../../../Assets/images";
const Query = () => {
  return (
    <section className={styles.query}>
      <Container>
        <div className={styles.query__wrap}>
          <div className={styles.query_content}>
            <div className={styles.query_title}>Any Query Let’s Connect</div>
            <div className={styles.query_body}>
              <div className={styles.query_body_text__wrap}>
                <div className={styles.query_hr}></div>
                <div className={styles.query_body_text}>
                  {" "}
                  say hello for my email to going deep understanding your
                  thoughts with my understanding
                </div>
              </div>
              <div className={styles.query_btn_wrap_desktop}>
                <Button className={styles.query_desktop_btn}>Mail Me</Button>
              </div>
            </div>
          </div>
          <div className={styles.query_media}>
            <img src={QueryImg} alt="query" />
          </div>
          <div className={styles.query_btn_wrap_mobile}>
            <Button className={styles.query_mobile_btn}>Mail Me</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Query;
