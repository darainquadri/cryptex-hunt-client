import FadeInSection from "@/utils/FadeInSection";
import { Link } from "react-router";

function Rules() {
  return (
    <div className="text-[#10ab66] w-full pb-12">
      <FadeInSection>
        <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-emerald-800 backdrop-filter backdrop-blur-[6px] bg-opacity-30 mx-auto mt-12 rounded-2xl border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-md py-4">
          <div className="text-[2.5rem] text-center font-bebasNeue text-yellow-300 leading-[4rem] px-4">
            Rules
          </div>
          <div className="pb-2 px-12 font-poppins font-normal pt-4 text-[1.0rem] text-gray-300">
            <ul className="list-disc">
              <li className="mb-3">Eligibility: Open to anyone interested.</li>
              <li className="mb-3">
                Duration: Cryptex 2025 runs live for three days.
              </li>
              <li className="mb-3">
                Levels: There are 30 levels, each increasing in complexity.
              </li>
              <li className="mb-3">
                Progression: Correctly answering each question unlocks the next
                level.
              </li>
              <li className="mb-3">
                Hints: Provided on the Quizzinga Instagram page.
              </li>
              <li className="mb-3">
                Googling: Permitted, though questions are crafted to challenge
                your search skills.
              </li>
              <li className="mb-3">
                Answer Sharing: Participants should avoid sharing answers to
                maintain fairness.
              </li>
              <li className="mb-3">
                Disqualification: Posting answers on social media will result in
                disqualification.
              </li>
              <li className="mb-3">
                Discrepancies: The quizmaster's decision will be final.
              </li>
              <li className="mb-3">
                Updates: Rules may change; participants will be notified via
                email.
              </li>
              <li className="mb-3">
                Judging Criteria: Participants will be judged based on their
                ability to successfully complete all levels. The fastest to
                complete all levels, with accuracy, will be crowned the winner.
              </li>
              <li className="font-semibold pt-4 text-yellow-200">
                Follow{" "}
                <Link
                  to="https://instagram.com/quizzingalnm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @quizzingalnm
                </Link>{" "}
                on Instagram to stay updated.
              </li>
            </ul>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Rules;
