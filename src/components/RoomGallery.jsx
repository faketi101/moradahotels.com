import React from "react";
import { FadeIn } from "./AnimationWrappers";

const RoomGallery = () => {
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      image: "/images/rooms/standard-room.jpeg",
      description: "Comfortable and affordable accommodation",
    },
    {
      id: 2,
      name: "Superior Room",
      image: "/images/rooms/superior-room.jpeg",
      description: "Enhanced comfort with premium amenities",
    },
    {
      id: 3,
      name: "Deluxe Room",
      image: "/images/rooms/deluxe-room.jpeg",
      description: "Spacious luxury with modern furnishings",
    },
    {
      id: 4,
      name: "Executive Room",
      image: "/images/rooms/executive-room.jpeg",
      description: "Ultimate luxury and sophistication",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-5xl md:text-6xl text-center mb-4">Welcome to <br /> MORADA HOTELS</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our carefully curated selection of rooms, each designed to
            provide the perfect blend of comfort and elegance
          </p>
        </FadeIn>

        {/* 2x2 Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <FadeIn key={room.id} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden h-[400px] md:h-[450px]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                      {room.name}
                    </h3>
                    <p className="text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {room.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* View All Button */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="/rooms"
              className="inline-block bg-black text-white px-8 py-4 text-lg hover:bg-gray-800 transition-colors duration-300 border border-black"
            >
              VIEW ALL ROOMS
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default RoomGallery;
