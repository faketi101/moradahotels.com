import React from "react";
import { BOOKING_URL } from "./staticData";
import { FadeIn, FadeRight, FadeUp } from "./AnimationWrappers";

const Hero = () => {
  return (
    <>
      <style>{`
        .date-input::-webkit-calendar-picker-indicator {
          filter: invert(1) brightness(2);
          cursor: pointer;
          font-size: 1.2em;
          opacity: 1;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        .date-input {
          position: relative;
          cursor: pointer;
        }
        .date-input::-webkit-datetime-edit-fields-wrapper {
          cursor: pointer;
        }
        .date-input::-webkit-datetime-edit {
          cursor: pointer;
        }
        .date-input::-webkit-datetime-edit-text {
          cursor: pointer;
        }
        .date-input::-webkit-datetime-edit-month-field {
          cursor: pointer;
        }
        .date-input::-webkit-datetime-edit-day-field {
          cursor: pointer;
        }
        .date-input::-webkit-datetime-edit-year-field {
          cursor: pointer;
        }
      `}</style>
      <div className='relative bg-[url("/images/hero.jpg")] bg-cover bg-center bg-no-repeat min-h-[80dvh] md:h-[600px] '>
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Content (will stay above overlay) */}
        <div className="relative z-10 h-full ">
          <div className="flex items-center justify-center h-full flex-col pt-50 md:pt-0">
            <FadeUp>
              <h1 className="text-6xl text-white text-center">
                Where Comfort <br /> Meets Elegance
              </h1>
            </FadeUp>
            <div className="mt-24">
              <form className="flex items-center justify-center gap-4 flex-wrap flex-col md:flex-row">
                <div className="flex flex-col">
                  <label htmlFor="from" className="text-white mb-1">
                    Check-in*
                  </label>
                  <input
                    type="date"
                    id="from"
                    name="from"
                    className="bg-transparent text-white px-4 py-2 border-b border-white cursor-pointer date-input"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="to" className="text-white mb-1">
                    Check-out*
                  </label>
                  <input
                    type="date"
                    id="to"
                    name="to"
                    className="bg-transparent text-white px-4 py-2 border-b border-white cursor-pointer date-input"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="guests" className="text-white mb-1">
                    Guests*
                  </label>
                  <input
                    type="number"
                    defaultValue={1}
                    id="guests"
                    name="guests"
                    className="bg-transparent text-white px-4 py-2 border-b border-white"
                  />
                </div>
                {/* this button should be low opacity white bg, black text, px-4 py-2 border */}
                <a
                  href={BOOKING_URL}
                  className="bg-white/70 text-black px-16 py-2 border border-white"
                >
                  Search
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
