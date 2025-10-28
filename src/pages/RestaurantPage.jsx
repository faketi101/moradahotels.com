import React from "react";
import { BOOKING_URL, offers, heroSlides } from "../components/staticData";
import PageHero from "../components/PageHero";
import OffersComponent from "../components/OffersComponent";
import { FadeUp } from "../components/AnimationWrappers";
const RestaurantPage = () => {
  return (
    <>
      {/* Hero Slider */}
      <PageHero
        heroSlides={heroSlides}
        pageName="Discover our Restaurant and Dining Options"
      />

      <section>
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="h-[600px]">
              <img
                className="w-auto h-full object-cover"
                src="/images/offer-discover.jpg"
                alt="welcome image"
              />
            </div>
            <div className="md:h-[600px] flex flex-col justify-center items-center">
              <FadeUp>
                {" "}
                <h2 className="text-5xl text-center">
                  About the <br /> Moradahotels Restaurant
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-2xl mt-6 text-center max-w-lg ">
                  A place to relax and feel at home. In every Westine Hotel you
                  find The Living, the beating heart of the hotel. Relax in our
                  homely bar & café after an exciting day in the city centre or
                  a meeting in our hotel. Enjoy cosy sofa’s, inspiring art and
                  delicious food and drinks.
                </p>
              </FadeUp>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-4xl text-white px-8 py-4 border border-black mt-16"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="h-[600px] bg-center bg-cover bg-fixed md:bg-fixed bg-scroll"
        style={{ backgroundImage: 'url("/images/cta.jpg")' }}
      ></section>

      <OffersComponent />
    </>
  );
};

export default RestaurantPage;
