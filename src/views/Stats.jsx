import Stat from "../assets/stat.png";
import { Marquee } from "../components/Marquee";
export const Stats = () => {
  return (
    <div className="flex flex-col w-full gap-14 bg-blue-accent">
      <div
        className="flex py-20 w-full"
        style={{
          background: "linear-gradient(175deg, #1f2326 49%, #0091ff 50%)",
        }}
      >
        <Marquee />
      </div>
      <div className="flex w-full gap-14 px-[10%] pb-10 py-20">
        <div className="flex flex-col gap-10 w-1/2 text-white">
          <h3 className="text-7xl font-anton uppercase mt-20">
            A scroll for your most intimate moments.
          </h3>
          <span className="text-5xl font-anton text-center">
            69%{" "}
            <span className="text-2xl font-dmsans font-medium ">Community</span>
          </span>
          <span className="text-5xl font-anton text-center">
            what the rest is{" "}
            <span className="text-2xl font-dmsans font-medium ">Community</span>
          </span>
        </div>
        <div className="flex justify-evenly w-1/2">
          <img src={Stat} alt="Stat" className="w-[540px] h-[540px]" />
        </div>
      </div>
    </div>
  );
};
