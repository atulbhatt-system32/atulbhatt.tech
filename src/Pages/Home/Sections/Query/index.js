import React from "react";
import { Container, Button } from "../../../../Components";
import { QueryImg } from "../../../../Assets/images";
const Query = () => {
  return (
    <section>
      <Container className="flex flex-col 2xl:flex-row-reverse 2xl:justify-between">
        <div>
          <img src={QueryImg} alt="query" />
        </div>
        <div className="flex flex-col justify-between 2xl:max-w-[40%]">
          <div className="font-bold text-black-normal capitalize text-32px 2xl:text-5xl 2xl:max-w-[400px] 2xl:leading-tight">
            Any Query Let’s Connect
          </div>
          <div className="flex items-center gap-3 font-normal">
            <div className="border border-solid w-28 h-px"></div>
            <div className="text-gray-dark capitalize text-12px">
              {" "}
              say hello for my email to going deep understanding your thoughts
              with my understanding
            </div>
          </div>
          <div className="font-medium">
            <Button className="2xl:text-lg 2xl:leading-7 py-3 px-8 2xl:ml-[92px]">
              Mail Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Query;
