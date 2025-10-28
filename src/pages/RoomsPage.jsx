import React from "react";
import PageHero from "../components/PageHero";
import { heroSlides, roomsData } from "../components/staticData";

// make an array of room categories for navigation
const roomCategories = [
  "Classic Room",
  "Studio Room",
  "Hollywooded (Twin Bed)",
  "Executive Room",
  "Classic Suite",
  "Luxury Suite",
];

const RoomsPage = () => {
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
                className="py-10 max-w-[200px] border-r last:border-0 border-gray-200"
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
              <h2 className="text-4xl md:text-5xl leading-tight md:w-1/2">
                Our spacious accommodations are
              </h2>
              <p className="text-base leading-relaxed text-gray-600 md:w-1/2">
                excellent for a trip with friends, family or as a couple. Each
                accommodation is fully equipped and furnished to create a
                pleasant and relaxing atmosphere.
              </p>
            </div>
          </div>

          {/* Rooms Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {roomsData.map((room, index) => {
              // Determine layout variation based on index
              const isFirstInRow = index % 2 === 0;
              const showDescription = index === 1; // Only show on Classic Room (index 1)
              const showPrice = index === 5; // Only show on Premium Deluxe (last item)

              return (
                <div key={room.id} className="space-y-6">
                  {/* Top content - varies by position */}
                  {showDescription && (
                    <div className="mb-6">
                      <p className="text-xs tracking-[0.3em] text-gray-500 mb-6 uppercase">
                        Our Rooms
                      </p>
                      <p className="text-base leading-relaxed text-gray-600 mb-8">
                        {room.description}
                      </p>
                    </div>
                  )}

                  {/* Room title - position varies */}
                  {!isFirstInRow && !showDescription && (
                    <div>
                      <h4 className="text-xl mb-6">{room.name}</h4>
                    </div>
                  )}

                  {/* Price section for Premium Deluxe */}
                  {showPrice && (
                    <div className="flex items-end justify-between mb-6">
                      <h4 className="text-xl">{room.name}</h4>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">From</span>
                        <span className="text-2xl">₦ {room.price}</span>
                      </div>
                    </div>
                  )}

                  {/* Room Image */}
                  <div>
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-[380px] object-cover"
                    />
                  </div>

                  {/* Bottom title for left column items */}
                  {isFirstInRow && (
                    <div className="space-y-3">
                      <h3 className="text-2xl">{room.name}</h3>
                    </div>
                  )}

                  {/* Title after image for Classic Room */}
                  {showDescription && (
                    <div>
                      <h4 className="text-xl">{room.name}</h4>
                    </div>
                  )}

                  {/* View Room button for Premium Deluxe */}
                  {showPrice && (
                    <div className="flex justify-center pt-4">
                      <button className="border border-black px-8 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-colors">
                        View Room
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
