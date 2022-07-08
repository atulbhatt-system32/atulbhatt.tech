import React from "react";

export default function SkillsButton({text}) {
  return (
    <div className="text-primary-green border-primary-green text-16 font-bold py-2 px-4 bg-transparent rounded-md border max-w-fit">
      {text}
    </div>
  );
}
