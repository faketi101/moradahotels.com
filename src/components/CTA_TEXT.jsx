import React from "react";

const CTA_TEXT = ({ title, description, button }) => {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="text-5xl text-center">
            {title}
          </h2>
          <p className="text-2xl mt-6 text-center max-w-3xl ">
            {description}
          </p>
          <a
            href={button.href}
            className="bg-transparent text-2xl text-black px-8 py-4 border-2 border-black mt-16"
          >
            {button.text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA_TEXT;
