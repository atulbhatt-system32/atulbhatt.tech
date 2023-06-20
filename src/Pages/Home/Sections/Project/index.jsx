import styles from "../../Home.module.scss";
import { Container, Card } from "../../../../Components";
import { pagesStrings } from "../../../../static.db";
import { Tilt } from "react-tilt";

const {
  home: { projects },
} = pagesStrings;

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 30, // max tilt rotation (degrees)
  perspective: 100000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Project = () => {
  return (
    <section className="dark:bg-black-200 bg-white-700 xl:px-24 2xl:px-24">
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
            {projects.projects_list.map((project, index) => {
              return (
                <Tilt options={defaultOptions} key={`project${index}`}>
                  <Card
                    key={project.id}
                    className={styles.project_card}
                    data={project}
                  >
                    {project?.thumbnail && (
                      <div className={styles.project_thumbnail}>
                        <img
                          src={project.thumbnail}
                          alt={project.name}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    )}
                    <span
                      style={{
                        color: project.color,
                        textAlign: "center",
                      }}
                    >
                      {project.name}
                    </span>
                  </Card>
                </Tilt>
              );
            })}
            {/* <Tilt options={defaultOptions}>
              <Card
                className={[
                  "bg-project-card-bg 2xl:justify-end",
                  styles.project_card,
                ].join(" ")}
              >
                <div
                  className="flex flex-col items-center justify-center pt-8 text-white-900"
                  onClick={() =>
                    window.open(
                      "https://atulbhatt.notion.site/Projects-15070509857444a38e4d7388092a08d9"
                    )
                  }
                >
                  <div>View All</div>
                  <div>&rarr;</div>
                </div>
              </Card>
            </Tilt> */}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project;
