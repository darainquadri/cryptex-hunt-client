import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { AuthContext } from "@/context/AuthProvider";
import FadeInSection from "@/utils/FadeInSection";
import { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Play() {
  const [textValue, setTextValue] = useState("");
  const { user, isLoading, checkAnswer, quesError } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkAnswer(textValue);
    setTextValue("");
  };
  return (
    <div className="text-[#10ab66] w-full pb-12">
      <FadeInSection>
        <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-emerald-800 backdrop-filter backdrop-blur-[6px] bg-opacity-30 mx-auto mt-12 rounded-2xl border-[2px] border-solid border-[#10ab66] shadow-yellow-400 px-8 shadow-md py-4">
          {!user.message ? (
            <div>
              <div className="text-center text-yellow-300 leading-[4rem] md:flex md:flex-row md:justify-between md:items-center md:gap-4">
                <div className="md:text-left w-full font-poppins font-semibold text-[1.25rem] md:flex-[3.5] px-4 bg-emerald-500 text-yellow-300 backdrop-filter backdrop-blur-sm bg-opacity-20 transition-colors hover:bg-emerald-900 border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-sm rounded-lg">
                  Level {user.current_question}
                </div>
                <Dialog>
                  <DialogTrigger className="mt-4 md:mt-0 w-full font-poppins font-semibold text-md px-4 bg-emerald-500 text-yellow-300 backdrop-filter backdrop-blur-sm bg-opacity-20 transition-colors hover:bg-emerald-900 border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-sm rounded-lg md:flex-1">
                    Hints
                  </DialogTrigger>
                  <DialogContent className="max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl font-poppins font-semibold text-md px-4 bg-emerald-500 text-yellow-300 backdrop-filter backdrop-blur-sm bg-opacity-20 transition-colors border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-sm rounded-lg">
                    <DialogHeader>
                      <DialogTitle className="font-semibold text-center text-[1.5rem]">
                        Hints
                      </DialogTitle>
                      <DialogDescription className="text-gray-200 text-center text-[1.125rem]">
                        {user && user.hint}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="pb-2 font-poppins font-normal pt-4 text-[1.0rem] text-gray-300">
                {user.url ? (
                  <img
                    className="w-full"
                    src={user.url}
                    alt={user.current_question}
                  />
                ) : (
                  <Skeleton className="w-full h-80 bg-emerald-500 backdrop-filter backdrop-blur-lg bg-opacity-30" />
                )}
                <form
                  onSubmit={handleSubmit}
                  className="md:flex md:flex-row md:justify-between md:gap-4"
                >
                  <Input
                    type="text"
                    placeholder="Enter your answer"
                    onChange={(e) => setTextValue(e.currentTarget.value)}
                    value={textValue}
                    autoComplete="off"
                    required={true}
                    className="mt-4 text-yellow-300 text-sm border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-sm active:outline-none w-full md:flex-[2.5]"
                  />
                  <Button
                    type="submit"
                    className="mt-4 w-full font-poppins font-semibold text-md p-4 bg-emerald-500 text-yellow-300 backdrop-filter backdrop-blur-sm bg-opacity-20 transition-colors hover:bg-emerald-900 border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-sm md:flex-1"
                    disabled={isLoading}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div className="text-[2.5rem] text-center font-bebasNeue font-semibold text-yellow-300">
              {user.message.split("\n").map((line, idx) => (
                <div key={idx}>
                  {line}
                  <br />
                </div>
              ))}
            </div>
          )}
          {quesError && (
            <div className="mt-4 bg-red-100 border text-center border-red-400 text-red-700 px-4 py-3 rounded">
              {quesError}
            </div>
          )}
        </div>
      </FadeInSection>
    </div>
  );
}

export default Play;
