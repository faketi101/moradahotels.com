import React from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { FadeUp, FadeLeft } from "./AnimationWrappers";
const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <FadeUp>
            {" "}
            <h2 className="text-5xl mb-4">Get in Touch</h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Contact us for reservations,
              inquiries, or any assistance you may need.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <FadeUp>
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-black text-white p-4 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">Email</h3>
                  <a
                    href="mailto:info@moradahotels.com"
                    className="text-lg text-gray-700 hover:text-black transition-colors"
                  >
                    info@moradahotels.com
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Phone Numbers */}
            <FadeUp delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="bg-black text-white p-4 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-2">Phone</h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+2348186604488"
                      className="block text-lg text-gray-700 hover:text-black transition-colors"
                    >
                      +234 818 660 4488
                    </a>
                    <a
                      href="tel:+2349169890105"
                      className="block text-lg text-gray-700 hover:text-black transition-colors"
                    >
                      +234 916 989 0105
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Check-in/Check-out Times */}
            <FadeUp delay={0.4}>
              <div className="flex items-start gap-4">
                <div className="bg-black text-white p-4 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-3">Hours</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-lg font-medium">Check-in Time</p>
                      <p className="text-gray-700">12:30 – 16:00 GMT</p>
                    </div>
                    <div>
                      <p className="text-lg font-medium">Check-out Time</p>
                      <p className="text-gray-700">06:00 – 12:00 GMT</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Additional Info */}
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 italic">
                All services provided in accordance with industry standards
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-[500px] lg:h-full min-h-[400px]">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border-4 border-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7309472859367!2d3.4726!3d6.4324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNTYuNiJOIDPCsDI4JzIxLjQiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Morada Hotels Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
