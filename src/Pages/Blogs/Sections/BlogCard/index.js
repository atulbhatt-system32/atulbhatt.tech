import React from "react";
import { Card, Container } from "../../../../Components";
import { Blog1, Blog2, Blog3, Heart, Watched } from "../../../../Assets/images";
const BlogCard = () => {
  return (
    <Card>
      <div>
        <img src={Blog1} alt="Blog1" />
      </div>
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="text-24px font-bold">Blog Title</div>
          <div>
            Lorem ipsum dolor sit ametcons ectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </div>
        </div>
        <div>Tags</div>
        <div className="flex gap-10">
          <div className="flex gap-2">
            <img src={Watched} alt="watched" />
            <div>34 people</div>
          </div>
          <div className="flex gap-2">
            <img src={Heart} alt="heart" />
            <div>34 people</div>
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default BlogCard;
