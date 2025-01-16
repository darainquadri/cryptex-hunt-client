import { Button } from "@/components/ui/button";
import plinth from "@/assets/plinth.png";
import quizzinga from "@/assets/quizzinga.png";
import FadeInSection from "@/utils/FadeInSection";
import { Link, useLocation } from "react-router";
import { useEffect } from "react";

function Home() {
  return (
    <div className="text-[#10ab66] w-full py-12">
      <FadeInSection>
        <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-emerald-800 backdrop-filter backdrop-blur-[6px] bg-opacity-30 mx-auto rounded-2xl border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-md py-4">
          <div className="text-[3rem] text-center font-bebasNeue text-yellow-300 leading-[4rem] px-4">
            In the Game of Cryptex
            <br />
            you either win or you die trying
          </div>
          <div className="font-poppins font-semibold py-2 text-center">
            Event Dates: 17th January 2025 - 19th January 2025
          </div>
          <div className="text-center mt-4 pb-2">
            <Link to={"/login"}>
              <Button className="font-poppins font-bold text-lg px-8 py-6 bg-emerald-500 text-yellow-300 backdrop-filter backdrop-blur-sm bg-opacity-20 transition-colors hover:bg-emerald-900 border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-sm">
                Play the Game
              </Button>
            </Link>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-emerald-800 backdrop-filter backdrop-blur-[6px] bg-opacity-30 mx-auto mt-12 rounded-2xl border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-md py-4">
          <div className="text-[2rem] text-center font-bebasNeue text-yellow-300 leading-[4rem] px-4">
            Prize Distribution
          </div>
          <div className="text-center mt-4 pb-2 font-semibold font-poppins">
            <div className="text-[1.5rem]">₹ 7000 - Winner</div>
            <div className="text-[1.25rem]">₹ 3000 - Runner Up</div>
            <div className="font-normal pt-4 text-[1.0rem]">
              Certificates of Participation - Everyone
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-emerald-800 backdrop-filter backdrop-blur-[6px] bg-opacity-30 mx-auto mt-12 rounded-2xl border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-md py-4">
          <div className="text-[2rem] text-center font-bebasNeue text-yellow-300 leading-[4rem] px-4">
            In Association With
          </div>
          <div className="text-center mt-4 pb-2 font-semibold font-poppins px-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="https://instagram.com/quizzingalnm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={quizzinga}
                alt="Quizzinga"
                className="max-w-[142px] h-20 sm:h-28 hover:cursor-pointer select-none"
                loading="lazy"
              />
            </Link>
            <Link
              to="https://plinth.co.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={plinth}
                alt="Plinth 2025"
                className="max-w-[512px] h-20 sm:h-28 hover:cursor-pointer select-none"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Home;
