import React from "react";
import { Container, Card } from "../../../../Components";
const Project = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col 2xl:gap-20 2xl:pb-16">
          <div className="flex flex-col 2xl:gap-8">
            <div className="font-bold text-black-normal 2xl:text-5xl">
              Projects
            </div>
            <div className="flex items-center gap-1.5 font-normal 2xl:text-2xl">
              <div className="border-t border-solid w-20 h-px"></div>
              <div className="text-gray-dark">
                {" "}
                I'm Proudly Work For Some Of Best Projects
              </div>
            </div>
          </div>
          <div className="flex flex-wrap 2xl:text-3xl 2xl:font-medium 2xl:gap-16">
            <Card className="min-w-[234px] min-h-[176px] p-6 text-project-card-lg-voilet flex flex-col items-center justify-center cursor-pointer">
              SourceBae
            </Card>
            <Card className="min-w-[234px] min-h-[176px] p-6 text-project-card-lg-blue flex flex-col items-center justify-center cursor-pointer">
              Rene CSS
            </Card>
            <Card className="min-w-[234px] min-h-[176px] p-6 text-project-card-dk-blue flex flex-col items-center justify-center cursor-pointer">
              Vital
            </Card>
            <Card className="min-w-[234px] min-h-[176px] p-6 text-project-card-dk-pink flex flex-col items-center justify-center cursor-pointer">
              Tealbox digital
            </Card>
            <Card className="min-w-[234px] min-h-[176px] p-6 text-project-card-dk-voilet flex flex-col items-center justify-center cursor-pointer">
              Samadhan
            </Card>
            <Card className="min-w-[234px] min-h-[176px] p-6 bg-project-card-bg flex flex-col items-center justify-end cursor-pointer">
              <div className="text-white flex flex-col items-center justify-center">
                <div>View All</div>
                <div className="text-5xl">&rarr;</div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Project;
