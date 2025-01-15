import FadeInSection from "@/utils/FadeInSection";

function About() {
  return (
    <div className="text-[#10ab66] w-full pb-12">
      <FadeInSection>
        <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-emerald-800 backdrop-filter backdrop-blur-[6px] bg-opacity-30 mx-auto mt-12 rounded-2xl border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-md py-4">
          <div className="text-[2.5rem] text-center font-bebasNeue text-yellow-300 leading-[4rem] px-4">
            About
          </div>
          <div className="pb-2 px-8 font-poppins font-normal pt-4 text-[1.0rem] text-gray-300">
            Cryptex is the flagship event of Quizzinga, the official Quiz Club
            of LNMIIT, and is held under the annual inter-collegiate
            Techno-Management fest, Plinth. Known for challenging even the
            brightest minds, Cryptex is an online quiz designed to test
            knowledge, critical thinking, and resourcefulness. It's an
            intellectual treasure hunt where participants work through riddles,
            puzzles, and clues across various genres to progress through each
            level.
            <br />
            <br />
            This year's Cryptex promises an exciting three-day event where
            participants can showcase their mental agility while utilizing the
            vast resources of the internet. With a series of escalating
            challenges, Cryptex will keep you on the edge of your seat until the
            very end!
            <br />
            <br />
            <span className="font-semibold text-yellow-200">
              Team Size:
            </span>{" "}
            Individual participation (one participant per registration).
            <br />
            <br />
            <span className="font-semibold text-yellow-200">
              Guidelines:
            </span>{" "}
            Each participant must register individually to compete. The quiz is
            set up in levels, where players must solve one question to advance
            to the next. Participants can utilize online resources, but each
            level is more challenging than the last.
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default About;
