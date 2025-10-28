import React from "react";
import { Wifi, Wind, Zap, UtensilsCrossed, Plane, Shield } from "lucide-react";
import {
  FadeIn,
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
  StaggerContainer,
} from "./AnimationWrappers";
const services = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description:
      "Stay connected with complimentary high-speed internet access throughout the hotel.",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description:
      "Relax in comfort with air-conditioned rooms, perfect for any season.",
  },
  {
    icon: Zap,
    title: "24-Hour Electricity",
    description: "Rest easy knowing that power is always on, day or night.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant & Bar",
    description:
      "Savor delicious meals at our on-site restaurant and unwind with a refreshing drink at our bar.",
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop-Off",
    description:
      "Enjoy smooth, stress-free transfers with our convenient airport pickup and drop-off service.",
  },
  {
    icon: Shield,
    title: "Secure Location",
    description:
      "Located in a safe, well-travelled area, our hotel offers peace of mind with added security for a worry-free stay.",
  },
];

const Services = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <FadeUp>
          <h2 className="text-5xl text-center mb-4">
            Exceptional Comfort & Convenient Amenities
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="text-2xl text-center max-w-5xl mx-auto mb-16">
            At MORADA HOTELS, we go above and beyond to ensure your stay is both
            comfortable and hassle-free. Enjoy a variety of premium services
            designed with your needs in mind:
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeLeft key={index} delay={(1 + index) / 10}>
                <div className="flex flex-col md:items-start items-center">
                  <Icon
                    size={48}
                    className="text-black mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-2xl mb-3">{service.title}</h3>
                  <p className="text-lg leading-relaxed md:text-left text-center">
                    {service.description}
                  </p>
                </div>
              </FadeLeft>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
