import React from "react";
import { ArrowRight } from "lucide-react";
import { offers } from "./staticData";

const OffersComponent = () => {
  return (
    <section>
      {/* this section will loop the offers array top image then name then description then link 
        match the design*/}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {offers.map((offer) => (
            <div className="flex flex-col items-center" key={offer.name}>
              <img
                className="w-auto max-w-[300px] h-[500px] object-cover"
                src={offer.img}
                alt={offer.name}
              />
              <div className="flex flex-col items-center">
                <h2 className="text-4xl mt-6 text-center">{offer.name}</h2>
                <p className="text-center my-10 text-lg max-w-[350px]">
                  {offer.description}
                </p>
                <a
                  className="text-center text-2xl text-black "
                  href={offer.link}
                >
                  <ArrowRight size={24} className="inline font-bold" />{" "}
                  {offer.link_title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersComponent;
