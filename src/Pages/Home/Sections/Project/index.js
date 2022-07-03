import React from "react";
import { Container, Card } from "../../../../Components";
const Project = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col">
          <div>
            <div className="2xl:text-5xl 2xl:font-bold">Projects</div>
            <div className="2xl:text-2xl 2xl:font-normal">
              I'm Proudly Work For Some Of Best Projects
            </div>
          </div>
          <div className="flex 2xl:text-3xl 2xl:font-medium">
            <Card>SourceBae</Card>
            <Card>Rene CSS</Card>
            <Card>Vital</Card>
            <Card>Tealbox digital</Card>
            <Card>Samadhan</Card>
            <Card>
              <div>View All</div>
              <div>&rarr;</div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project;
