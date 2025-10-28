import React from "react";
import PageHero from "../components/PageHero";
import ContactSection from "../components/ContactSection";
import { heroSlides } from "../components/staticData";


const ContactPage = () => {
  return (
    <>
      <PageHero
        heroSlides={heroSlides}
        pageName="Contact Us"
      />
      <ContactSection />
    </>
  );
};

export default ContactPage;
