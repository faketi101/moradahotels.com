import React from "react";

const Hero = () => {
  return (
    <>
      <div className='relative bg-[url("/images/hero.jpg")] bg-cover bg-center bg-no-repeat h-[600px]'>
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Content (will stay above overlay) */}
        <div className="relative z-10 h-full">
          <div className="flex items-center justify-center h-full flex-col">
            <h1 className="text-6xl text-white">A Slice of Paradise</h1>
            <div className="mt-24">
              <form className="flex items-center justify-center gap-4">
                <div className="flex flex-col">
                  <label htmlFor="from" className="text-white">
                    Check-in*
                  </label>
                  <input
                    type="date"
                    id="from"
                    name="from"
                    className="bg-transparent text-white px-4 py-2 border-b border-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="to" className="text-white">
                    Check-out*
                  </label>
                  <input
                    type="date"
                    id="to"
                    name="to"
                    className="bg-transparent text-white px-4 py-2 border-b border-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="guests" className="text-white">
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
                <button
                  type="submit"
                  className="bg-white/70 text-black px-16 py-2 border border-white"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
