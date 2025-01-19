import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import data from "../utils/leaderboard_data";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    setLeaderboard(data);
  }, []);
  return (
    <div className="text-[#10ab66] w-full pb-12">
      <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-emerald-800 backdrop-filter backdrop-blur-[6px] bg-opacity-30 mx-auto mt-12 rounded-2xl border-[2px] border-solid border-[#10ab66] shadow-yellow-400 shadow-md py-4">
        <div className="text-[2.5rem] text-center font-bebasNeue text-yellow-300 leading-[4rem] px-4">
          Leaderboard
        </div>
        <div className="pb-2 px-8 font-poppins font-normal pt-4 text-[1.0rem] text-gray-300">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-emerald-300">Rank</TableHead>
                <TableHead className="text-emerald-300">UserID</TableHead>
                <TableHead className="text-emerald-300">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard &&
                leaderboard.map((userInfo, index) => (
                  <TableRow
                    key={index}
                    className={
                      index == 0
                        ? "text-yellow-300 font-semibold"
                        : index == 1
                        ? "text-yellow-600 font-semibold"
                        : ""
                    }
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{`@${userInfo.email.split("@")[0]}`}</TableCell>
                    <TableCell>{userInfo.current_question}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
