import React from "react";
import styles from "./Home.module.scss";
import { Container } from "../../Components";
import { pagesStrings } from "../../static.db";

const {
  home: { testimonials },
} = pagesStrings;

const TestimonialCard = ({ data: { classes, testimonial } }) => {
  return (
    <div className="flex-col border-white-100 border bg-white-700 text-black rounded-xl px-8 py-6">
      <div>
        <img
          src="https://i.pravatar.cc/100"
          alt="testimonial"
          height="120"
          width="120"
          className="rounded-full"
        />
      </div>
      <div className={styles.testimonial_card_body}>
        <div className={styles.testimonial_card_body_title}>
          {testimonial.name}
        </div>

        <div className="text-black text-2xl">{testimonial.testimony}</div>
      </div>
    </div>
  );
};
export default function Testimonials() {
  return (
    <section className="bg-black-200">
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
