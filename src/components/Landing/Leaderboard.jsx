import React from "react";

const leaderboardData = [
  {
    rank: 1,
    walletAddress: "0xAbC123...789",
    noOfReferrals: 50,
    totalReferral: "$5000",
    prize: "$1000",
  },
  {
    rank: 2,
    walletAddress: "0xDef456...012",
    noOfReferrals: 45,
    totalReferral: "$4500",
    prize: "$750",
  },
  {
    rank: 3,
    walletAddress: "0xGhi789...345",
    noOfReferrals: 40,
    totalReferral: "$4000",
    prize: "$500",
  },
  {
    rank: 4,
    walletAddress: "0xJkl012...678",
    noOfReferrals: 35,
    totalReferral: "$3500",
    prize: "$400",
  },
  {
    rank: 5,
    walletAddress: "0xMno345...901",
    noOfReferrals: 30,
    totalReferral: "$3000",
    prize: "$300",
  },
  {
    rank: 6,
    walletAddress: "0xPqr678...234",
    noOfReferrals: 25,
    totalReferral: "$2500",
    prize: "$200",
  },
  {
    rank: 7,
    walletAddress: "0xStu901...567",
    noOfReferrals: 20,
    totalReferral: "$2000",
    prize: "$150",
  },
  {
    rank: 8,
    walletAddress: "0xVwx234...890",
    noOfReferrals: 18,
    totalReferral: "$1800",
    prize: "$100",
  },
  {
    rank: 9,
    walletAddress: "0xYza567...123",
    noOfReferrals: 15,
    totalReferral: "$1500",
    prize: "$75",
  },
  {
    rank: 10,
    walletAddress: "0xBcd890...456",
    noOfReferrals: 12,
    totalReferral: "$1200",
    prize: "$50",
  },
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 lg:px-10">
      <h1 className="sm:text-6xl text-3xl text-center lg:text-start font-bold mb-10 bg-gradient-to-r from-[#FF6C2F] to-[#FF4A15] bg-clip-text text-transparent">
        Monthly Referral Leaderboard
      </h1>

      <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-4">
        <div className="overflow-x-auto rounded-2xl shadow-md">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-black text-white text-left">
                <th className="p-3 text-base">Rank</th>
                <th className="p-3 text-base">Wallet Address</th>
                <th className="p-3 text-base">No of Referrals</th>
                <th className="p-3 text-base">Total Referral</th>
                <th className="p-3 text-base">Prize</th>
              </tr>
            </thead>
            <tbody className=" ">
              {leaderboardData.map((entry, index) => (
                <tr
                  key={entry.rank}
                  className={`${
                    index === 0
                      ? "bg-[#FD5D31] text-white"
                      : index === 1
                      ? "bg-[#FF7D5A] text-white"
                      : index === 2
                      ? "bg-[#FF9477] text-white"
                      : index === 3
                      ? "bg-[#FFAE98]"
                      : index === 4
                      ? "bg-[#FFCBBD]"
                      : "bg-orange-100"
                  } border-b border-gray-300 text-sm sm:text-base `}
                >
                  <td className="p-3 text-black text-sm">{entry.rank}</td>
                  <td className="p-3 text-black text-sm truncate">{entry.walletAddress}</td>
                  <td className="p-3 text-black text-sm">{entry.noOfReferrals}</td>
                  <td className="p-3 text-black text-sm">{entry.totalReferral}</td>
                  <td className="p-3 text-black text-sm">{entry.prize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
