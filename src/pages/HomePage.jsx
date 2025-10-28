import React from "react";
import Hero from "../components/Hero";
import CTA_TEXT from "../components/CTA_TEXT";
import Services from "../components/Services";
import ContactSection from "../components/ContactSection";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "../components/staticData";

const offers = [
  {
    name: "Gift Voucher",
    img: "/images/offer-gift.jpg",
    description:
      "Surprise colleagues or relations with the Morada Gift Voucher.",
    link: "#",
    link_title: "Read more",
  },
  {
    name: "Special offers",
    img: "/images/offer-special.jpg",
    description:
      "Surprise colleagues or relations with the Morada Gift Voucher.",
    link: "#",
    link_title: "View offers",
  },
  {
    name: "Discover Morada",
    img: "/images/offer-discover.jpg",
    description: "Explore the Morada Hotels & Spa in Lekki Phase 1 and Lagos",
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
                src="/images/offer-discover.jpg"
                alt="welcome image"
              />
            </div>
            <div className="h-[600px] flex flex-col justify-center items-center">
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
      <ContactSection />
    </>
  );
};

export default HomePage;
