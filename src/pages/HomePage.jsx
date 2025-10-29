import React from "react";
import Hero from "../components/Hero";
import CTA_TEXT from "../components/CTA_TEXT";
import Services from "../components/Services";
import ContactSection from "../components/ContactSection";
import RoomGallery from "../components/RoomGallery";

import { BOOKING_URL } from "../components/staticData";
import OffersComponent from "../components/OffersComponent";

import { FadeIn, FadeRight, FadeUp } from "../components/AnimationWrappers";
const HomePage = () => {
  return (
    <>
      <Hero />
      <RoomGallery />
      {/* <section>
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="h-[600px]">
              <img
                className="w-auto h-full object-cover"
                src="/images/offer-discover.jpg"
                alt="welcome image"
              />
            </div>
            <div className="md:min-h-[800px] flex flex-col justify-center items-center">
              <FadeUp>
                <h2 className="text-6xl text-center md:mt-20">
                  Welcome to <br />
                  Morada Hotels
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-2xl mt-6 text-center max-w-lg ">
                  MORADA HOTELS combines comfort and charm in every stay.
                  Nestled in picturesque surroundings, our boutique
                  accommodations offer a perfect retreat for travellers seeking
                  relaxation and adventure. Each room is thoughtfully designed
                  to provide a cozy atmosphere, ensuring you feel right at home.
                  Enjoy personalized service and a warm, welcoming environment
                  as you explore local attractions or unwind in our serene
                  spaces. At MORADA HOTELS, we create memorable experiences,
                  whether you’re here for a weekend getaway or an extended stay.
                  Discover the essence of hospitality that sets us apart!
                </p>
              </FadeUp>

              <FadeRight className="mt-20">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-4xl text-white px-8 py-4 border border-black mt-16"
                >
                  Book Now
                </a>
              </FadeRight>
            </div>
          </div>
        </div>
      </section> */}

      <Services />
      <section>
        <div className="container mx-auto px-4 py-16">
          <div className="w-full flex flex-col justify-center items-center">
            <FadeUp>
              <h2 className="text-5xl text-center">Why Choose US</h2>
            </FadeUp>
            <FadeUp delay={0}>
              <p className="text-2xl mt-6 text-center max-w-3xl">
                At MORADA HOTELS, &nbsp; we offer a welcoming stay with
                unbeatable comfort and exceptional service. &nbsp; &nbsp;Located
                in the Serene and secure neighborhood of Awuse estate,
                &nbsp;Opebi, &nbsp; Ikeja,  &nbsp;Lagos, &nbsp; our hotel provides easy
                access to Murtala Muhammed airport.  &nbsp;&nbsp;Enjoy modern rooms,
                &nbsp; top-notch amenities, and a dedicated team that ensures
                your stay is relaxing and stress-free.&nbsp; &nbsp;Whether you're here for
                business or leisure, &nbsp; we make it easy to feel at home.&nbsp; &nbsp; Book your
                stay today and experience the best with us!
              </p>
            </FadeUp>

            <FadeUp className="mt-10">
              <a
                href={BOOKING_URL}
                className="bg-transparent text-2xl text-black px-8 py-4 border-2 border-black mt-16"
              >
                BOOK NOW
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      <section
        className="h-[600px] bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: 'url("/images/cta.jpg")',
          backgroundAttachment: "fixed",
        }}
      ></section>

      {/*  */}
      <CTA_TEXT
        title="Our Kitchen"
        description="Our highly-rated chefs have been acknowledged in several awards over the years. Let our chefs surprise you with their Nigerian and Continental culinary highlights."
        button={false}
      />

      {/*  */}

      <OffersComponent />
      <ContactSection />
    </>
  );
};

export default HomePage;
