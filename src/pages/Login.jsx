import { AuthContext } from "@/context/AuthProvider";
import FadeInSection from "@/utils/FadeInSection";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";

function Login() {
  const { login, isAuthenticated, isLoading, error } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/play");
  }, [isAuthenticated]);
  const handleLogin = () => {
    try {
      login();
      navigate("/play");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="text-[#10ab66] w-full pb-12">
      <FadeInSection>
        <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-emerald-800 backdrop-filter backdrop-blur-[6px] bg-opacity-30 mx-auto mt-12 rounded-2xl border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-md py-4">
          <div className="text-[2.5rem] text-center font-bebasNeue text-yellow-300 leading-[4rem] px-4">
            Brace Yourselves
          </div>
          <div className="pb-2 px-8 font-poppins font-normal pt-4 text-[1.0rem] text-gray-300">
            <div className="text-center text-lg text-emerald-600">
              And lay thy claim to the very wisdom of{" "}
              <span className="text-yellow-300 font-semibold">
                Veni Vidi Vici
              </span>
            </div>
            <Button
              className="mt-8 w-full font-poppins font-semibold text-md p-4 bg-emerald-500 text-yellow-300 backdrop-filter backdrop-blur-sm bg-opacity-20 transition-colors hover:bg-emerald-900 border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-sm"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              <FaGoogle />
              {isLoading ? "Logging in..." : "Login with Google"}
            </Button>
            {error && (
              <div className="mt-8 bg-red-100 border font-poppins text-center border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Login;
