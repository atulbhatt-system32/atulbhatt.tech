import React from "react";
import Container from "../../../../Components/Container";
import Cursor from "../../../../Assets/images/home/cursor.svg";
const Requirement = () => {
  return (
    <section>
      <Container className="bg-gradient-require-bg flex flex-col gap-8">
        <div className="font-bold capitalize text-center self-center 2xl:text-4xl max-w-[1120px]">
          Do you have a project that you want to be done? Check out if my skills
          matches your requirements
        </div>
        <div className="self-center rounded-md bg-transparent-dark">
          <button className="flex items-center gap-2.5 p-3">
            <img src={Cursor} alt="cursor" />
            <div className="font-medium text-2xl">Here</div>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Requirement;
