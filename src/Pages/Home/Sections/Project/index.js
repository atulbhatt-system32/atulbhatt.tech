import React from "react";
import { Container, Card } from "../../../../Components";
const Project = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col 2xl:gap-20">
          <div className="flex flex-col 2xl:gap-8">
            <div className="2xl:text-5xl 2xl:font-bold">Projects</div>
            <div className="2xl:text-2xl 2xl:font-normal">
              I'm Proudly Work For Some Of Best Projects
            </div>
          </div>
          <div className="flex flex-wrap 2xl:text-3xl 2xl:font-medium 2xl:gap-16">
            <Card className="bg-white self-center flex-1 py-16 px-8 min-w-234 text-project-card-lg-voilet">
              SourceBae
            </Card>
            <Card className="bg-white self-center flex-1 py-16 px-8 min-w-234 text-project-card-lg-blue">
              Rene CSS
            </Card>
            <Card className="bg-white self-center flex-1 py-16 px-8 min-w-234 text-project-card-dk-blue">
              Vital
            </Card>
            <Card className="bg-white self-center flex-1 py-16 px-8 min-w-234 text-project-card-dk-pink">
              Tealbox digital
            </Card>
            <Card className="bg-white self-center flex-1 py-16 px-8 min-w-234 text-project-card-dk-voilet">
              Samadhan
            </Card>
            <Card className="bg-white self-center flex-1 py-16 px-8 min-w-234 bg-project-card-bg">
              <div className="text-white flex flex-col items-center">
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
