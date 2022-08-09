import React from "react";
import styles from "./Home.module.scss";
import { Container } from "../../Components";
import { pagesStrings } from "../../static.db";

const {
  home: { testimonials },
} = pagesStrings;

const TestimonialCard = ({ data: { classes, testimonial } }) => {
  return (
    <div className={styles.testimonial_card}>
      <div className={styles.testimonial_card_wrap}>
        <div className={styles.testimonial_card_media}>
          <img
            src={testimonial.image}
            alt="testimonial"
            height="120"
            width="120"
            className="rounded-full"
          />
        </div>
        <div className={styles.testimonial_card_text}>
          <div className={styles.testimonial_card_title}>
            {testimonial.name}
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
    <section className="dark:bg-black-200">
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
            {testimonials.testimonials_list.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                data={{
                  classes: [styles.testimonial_card],
                  testimonial,
                }}
              >
                <span className={`text-project-card-lg-white`}>
                  {testimonial.name}
                </span>
              </TestimonialCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
