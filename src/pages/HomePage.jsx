import React from "react";
import Hero from "../components/Hero";
import CTA_TEXT from "../components/CTA_TEXT";
import Services from "../components/Services";
import ContactSection from "../components/ContactSection";

import { BOOKING_URL } from "../components/staticData";
import OffersComponent from "../components/OffersComponent";
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
                src="/images/offer-discover.jpg"
                alt="welcome image"
              />
            </div>
            <div className="md:h-[600px] flex flex-col justify-center items-center">
              <h2 className="text-5xl text-center">
                Welcome to <br />
                Morada Hotels
              </h2>
              <p className="text-2xl mt-6 text-center max-w-lg ">
                MORADA HOTELS combines comfort and charm in every stay. Nestled
                in picturesque surroundings, our boutique accommodations offer a
                perfect retreat for travellers seeking relaxation and adventure.
                Each room is thoughtfully designed to provide a cozy atmosphere,
                ensuring you feel right at home. Enjoy personalized service and
                a warm, welcoming environment as you explore local attractions
                or unwind in our serene spaces. At MORADA HOTELS, we create
                memorable experiences, whether you’re here for a weekend getaway
                or an extended stay. Discover the essence of hospitality that
                sets us apart!
              </p>
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

      <Services />

      <CTA_TEXT
        title="Why Choose US"
        description="At MORADA HOTELS, we offer a welcoming stay with unbeatable comfort and exceptional service. Located in the Serene and secure neighborhood of Awuse estate,Opebi,Ikeja,Lagos, our hotel provides easy access to Murtala Muhammed airport. Enjoy modern rooms, top-notch amenities, and a dedicated team that ensures your stay is relaxing and stress-free. Whether you're here for business or leisure, we make it easy to feel at home.

Book your stay today and experience the best with us!"
        button={{
          href: BOOKING_URL,
          text: "BOOK NOW",
        }}
      />

      <section
        className="h-[600px] bg-center bg-cover bg-fixed md:bg-fixed bg-scroll"
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

      <OffersComponent />
      <ContactSection />
    </>
  );
};

export default HomePage;
