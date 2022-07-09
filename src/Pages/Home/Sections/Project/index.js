import React from "react";
import { Container, Card } from "../../../../Components";
const Project = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-10 2xl:gap-20 2xl:pb-16">
          <div className="flex flex-col gap-4 2xl:gap-8">
            <div className="font-bold text-black-normal text-32px 2xl:text-48px">
              Projects
            </div>
            <div className="flex items-center gap-1.5 font-normal text-12px 2xl:text-24px">
              <div className="border-t border-solid w-20 h-px"></div>
              <div className="text-gray-dark">
                {" "}
                I'm Proudly Work For Some Of Best Projects
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 2xl:text-3xl text-24px 2xl:text-32px 2xl:gap-16 font-medium">
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
            <Card className="min-w-[234px] min-h-[176px] p-6 bg-project-card-bg flex flex-col items-center justify-center 2xl:justify-end cursor-pointer">
              <div className="text-white-900 flex flex-col items-center justify-center">
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
