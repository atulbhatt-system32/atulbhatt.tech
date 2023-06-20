import React from "react";

export default function SkillsButton({ text }) {
  return (
    <div className="text-primary-green border-primary-green border-1.5 text-16px md:text-20px lg:text-24px font-bold py-2 px-4 bg-transparent rounded-md border max-w-fit">
      {text}
    </div>
  );
}
