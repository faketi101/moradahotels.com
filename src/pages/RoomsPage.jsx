import React, { useState, useEffect } from "react";
import PageHero from "../components/PageHero";
import { BOOKING_URL, heroSlides, roomsData } from "../components/staticData";
import { FadeLeft, FadeUp } from "../components/AnimationWrappers";
// make an array of room categories for navigation
const roomCategories = ["Deluxe", "Executive", "Superior", "Standard"];

const RoomsPage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <PageHero
        heroSlides={heroSlides}
        pageName="Discover our rooms and suites
"
      />
      {/* Room Categories Navigation */}
      <section className="bg-gray-50 py-12 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap items-center justify-center">
            {roomCategories.map((category) => (
              <div
                key={category}
                className="py-10 max-w-[200px] md:border-r last:border-0 border-gray-200"
              >
                <button className="text-2xl font-light tracking-wide hover:opacity-60 transition-opacity px-5">
                  {category}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Rooms Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-6 uppercase">
              Our Rooms
            </p>
            <div className="flex flex-col md:flex-row gap-12">
              <FadeUp>
                {" "}
                <h2 className="text-4xl md:text-5xl leading-tight md:w-1/2">
                  At MORADA HOTELS,
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                {" "}
                <p className="text-base leading-relaxed text-gray-600 md:w-1/2 text-lg md:text-xl">
                  we offer a variety of rooms and suites designed to meet the
                  needs of every traveler. Whether you’re visiting for business,
                  enjoying a romantic getaway, or traveling with family, our
                  accommodations provide comfort, convenience, and style.
                </p>
              </FadeUp>
            </div>
          </div>

          {/* Rooms Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {roomsData.map((room, index) => {
              const getSpace = (index) => {
                switch (index) {
                  case 0:
                    return "10px";
                  case 1:
                    return "170px";
                  case 2:
                    return "-60px";
                  case 3:
                    return "160px";
                  default:
                    return "520px";
                }
              };

              return (
                <FadeLeft key={room.id} delay={(1 + index) / 10}>
                  <div
                    style={{ marginTop: isDesktop ? getSpace(index) : "10px" }}
                  >
                    {/* Room Image */}
                    <div>
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-[380px] object-cover"
                      />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl">{room.name}</h3>
                      <a
                        href={BOOKING_URL}
                        className="text-white bg-black px-10 py-2 text-xl"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </FadeLeft>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
