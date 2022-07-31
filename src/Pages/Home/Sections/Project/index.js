import React from "react";
import styles from "../../Home.module.scss";
import { Container, Card } from "../../../../Components";
import { pagesStrings } from "../../../../static.db";

const {
  home: { projects },
} = pagesStrings;
const Project = () => {
  return (
    <section className="bg-black-200">
      <Container>
        <div className={styles.project}>
          {/* PROJECT HEAD */}
          <div className={styles.project_head}>
            <div className={styles.project_title}>{projects.title}</div>
            <div className={styles.project_subtitle}>
              <div className={styles.project_subtitle_line}></div>
              <div className={styles.project_subtitle_text}>
                {projects.sub_title}
              </div>
            </div>
          </div>
          {/* PROJECT BODY */}
          <div className={styles.project_body}>
            {projects.projects_list.map((project) => (
              <Card
                key={project.id}
                className={[
                  styles.project_card,
                  "bg-black-100",
                  "cursor:pointer",
                ].join(" ")}
                data={project}
              >
                <span className={`text-project-card-lg-${project.color}`}>
                  {project.name}
                </span>
              </Card>
            ))}

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
