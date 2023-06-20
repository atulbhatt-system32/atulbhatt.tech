import React from "react";
import { Carousel } from "../../Components";
import styles from "./Home.module.scss";
import { Container } from "../../Components";
import { pagesStrings } from "../../static.db";

const {
  home: { testimonials },
} = pagesStrings;

const TestimonialCard = ({ data: { testimonial } }) => {
  return (
    <div
      style={{
        padding: "40px 0",
      }}
    >
      <div className={styles.testimonial_card}>
        <div className={styles.testimonial_card_wrap}>
          <div className={styles.testimonial_card_media}>
            <img
              src={testimonial.image}
              alt="testimonial"
              className="rounded-full"
            />
            <div className={styles.testimonial_card_text}>
              <div className={styles.testimonial_card_title}>
                {testimonial.name}
              </div>
            </div>
          </div>
          <div className={styles.testimonial_card_body}>
            {testimonial.testimony}
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Testimonials() {
  return (
    <section className="dark:bg-black-200 xl:px-24 2xl:px-24">
      <Container>
        <div className={styles.testimonials}>
          {/* PROJECT HEAD */}
          <div className={styles.testimonial_head}>
            <div className={styles.testimonial_title}>{testimonials.title}</div>
            <div className={styles.testimonial_subtitle}>
              <div className={styles.testimonial_subtitle_line}></div>
              <div className={styles.testimonial_subtitle_text}>
                {testimonials.sub_title}
              </div>
            </div>
          </div>
          {/* PROJECT BODY */}
          <div className={styles.testimonial_body}>
            <Carousel>
              {testimonials.testimonials_list.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  data={{
                    classes: [styles.testimonial_card],
                    testimonial,
                  }}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </section>
  );
}
