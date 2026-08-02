import React from "react";
import Rating from "./Rating";


const TestimonialCard = ({ testimonial }) => {
  const initials = testimonial.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="rounded-xl border border-white/10 bg-[#111111] p-7 transition hover:border-white/20">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-white/10 text-sm font-semibold text-white">
          {initials}
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold">{testimonial.name}</h2>
          <p className="text-sm text-gray-500">{testimonial.company}</p>
        </div>
      </div>

      <p className="mt-5 text-lg leading-7 text-gray-400">
        {testimonial.content}
      </p>
      <Rating rating={testimonial.rating} />
    </article>
  );
};

export default TestimonialCard;
