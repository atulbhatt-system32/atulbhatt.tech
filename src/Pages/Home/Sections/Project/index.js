import React from "react";
import styles from "../../Home.module.scss";
import { Container, Card } from "../../../../Components";
const Project = () => {
  return (
    <section className="bg-black-200">
      <Container>
        <div className={styles.project}>
          {/* PROJECT HEAD */}
          <div className={styles.project_head}>
            <div className={styles.project_title}>Projects</div>
            <div className={styles.project_subtitle}>
              <div className={styles.project_subtitle_line}></div>
              <div className={styles.project_subtitle_text}>
                I'm Proudly Work For Some Of Best Projects
              </div>
            </div>
          </div>
          {/* PROJECT BODY */}
          <div className={styles.project_body}>
            <Card className={[styles.project_card, "bg-black-100"].join(" ")}>
              <span className="text-project-card-lg-voilet">SourceBae</span>
            </Card>
            <Card className={[styles.project_card, "bg-black-100"].join(" ")}>
              <span className="text-project-card-lg-blue">Rene CSS</span>
            </Card>
            <Card className={[styles.project_card, "bg-black-100"].join(" ")}>
              <span className="text-project-card-dk-blue">Vital</span>
            </Card>
            <Card className={[styles.project_card, "bg-black-100"].join(" ")}>
              <span className="text-project-card-dk-pink">Tealbox digital</span>
            </Card>
            <Card className={[styles.project_card, "bg-black-100"].join(" ")}>
              <span className="text-project-card-dk-voilet">Samadhan</span>
            </Card>
            <Card
              className={[
                "bg-project-card-bg 2xl:justify-end",
                styles.project_card,
              ].join(" ")}
            >
              <div className="text-white-900 flex flex-col items-center justify-center pt-8">
                <div>View All</div>
                <div>&rarr;</div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project;
