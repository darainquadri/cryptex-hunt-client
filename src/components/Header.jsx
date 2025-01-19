import { Link } from "react-router";
import logo from "@/assets/logo.png";

function Header() {
  return (
    <div className="z-50 pt-4">
      <div className="mx-auto px-12 py-4 z-50 h-auto max-w-[18rem] sm:max-w-xl md:max-w-2xl lg:max-w-4xl bg-emerald-800 backdrop-filter backdrop-blur-lg bg-opacity-30 flex flex-col items-center justify-between gap-4 rounded-3xl sm:rounded-full border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-sm">
        <span className="border-[3px] border-yellow-300 rounded-sm shadow-yellow-300 shadow-sm">
          <Link to={"/"}>
            <img
              src={logo}
              className="w-full max-h-12 select-none"
              alt="Cryptex Hunt"
              loading="lazy"
            />
          </Link>
        </span>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 font-poppins text-[#10ab66]">
          <div className="transition-all border-b-2 border-transparent hover:text-yellow-300 hover:border-b-yellow-300">
            <Link to={"/"}>home</Link>
          </div>
          <div className="transition-all border-b-2 border-transparent hover:text-yellow-300 hover:border-b-yellow-300">
            <Link to={"/rules"}>rules</Link>
          </div>
          <div className="transition-all border-b-2 border-transparent hover:text-yellow-300 hover:border-b-yellow-300">
            <Link to={"/about"}>about</Link>
          </div>
          <div className="transition-all border-b-2 border-transparent hover:text-yellow-300 hover:border-b-yellow-300">
            <Link to={"/leaderboard"}>leaderboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
