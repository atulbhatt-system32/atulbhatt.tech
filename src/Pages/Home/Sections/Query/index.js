import React from "react";
import { Container, Button } from "../../../../Components";
const Query = () => {
  return (
    <section>
      <Container>
        <div></div>
        <div>
          <div className="font-bold text-black-normal 2xl:text-5xl">
            Any query let’s connect
          </div>
          <div className="flex items-center gap-1.5 font-normal 2xl:text-2xl">
            <div className="border-t border-solid w-20 h-px"></div>
            <div className="text-gray-dark">
              {" "}
              say hello for my email to going deep understanding your thoughts
              with my understanding
            </div>
          </div>
          <Button className="2xl:py-3 2xl:px-8">Mail Me</Button>
        </div>
      </Container>
    </section>
  );
};

export default Query;
