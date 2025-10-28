import React from "react";
import Hero from "../components/Hero";
import CTA_TEXT from "../components/CTA_TEXT";
import { ArrowRight } from "lucide-react";

const offers = [
  {
    name: "Gift Voucher",
    img: "/images/offer-gift.jpg",
    description:
      "Surprise colleagues or relations with the Westine Gift Voucher.",
    link: "#",
    link_title: "Read more",
  },
  {
    name: "Special offers",
    img: "/images/offer-special.jpg",
    description:
      "Surprise colleagues or relations with the Westine Gift Voucher.",
    link: "#",
    link_title: "View offers",
  },
  {
    name: "Discover Westine",
    img: "/images/offer-discover.jpg",
    description: "Explore the Westine Hotels & Spa in Lekki Phase 1 and Lagos",
    link: "#",
    link_title: "Read more",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <section>
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="h-[600px]">
              <img
                className="w-auto h-full object-cover"
                src="/images/welcome.jpg"
                alt="welcome image"
              />
            </div>
            <div className="h-[600px] flex flex-col justify-center items-center">
              <h2 className="text-5xl text-center">
                Welcome to <br />
                Westine Hotels & Spa
              </h2>
              <p className="text-2xl mt-6 text-center max-w-lg ">
                At Westine Hotels & Spa, we love making our guests feel
                comfortable, energized, and productive when they stay with us.
                We do this by combining premium accommodations with great
                service.
              </p>
              <button className="bg-black text-4xl text-white px-8 py-4 border border-black mt-16">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTA_TEXT
        title="Your meeting at Westine Hotels & Spa"
        description="At Westine you find state-of-the-art technology and charming conference rooms, combined with the service of a team that understands the importance of a well-organized meeting."
        button={{
          href: "/meetings-events",
          text: "VIEW OUR CONFERENCE ROOMS",
        }}
      />

      <section
        className="relative h-[600px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("/images/cta.jpg")' }}
      ></section>

      {/*  */}
      <CTA_TEXT
        title="Our Dining Restaurant"
        description="The highly-rated restaurant of our hotel is acknowledged with several awards. Let our chefs surprise you with their culinary highlights."
        button={{
          href: "/restraunt",
          text: "VIEW OUR RESTAURANT",
        }}
      />

      {/*  */}

      <section>
        {/* this section will loop the offers array top image then name then description then link 
        match the design*/}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {offers.map((offer) => (
              <div className="flex flex-col items-center" key={offer.name}>
                <img
                  className="w-auto h-[500px] object-cover"
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
    </>
  );
};

export default HomePage;
