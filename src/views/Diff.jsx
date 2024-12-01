import ScrollEye from "../assets/scrollLooking.png";
import ScrollKing from "../assets/scrollKing.png";
import BadScroll from "../assets/badScroll.png";

export const Diff = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full py-20">
      <div className="text-secondary text-7xl font-anton uppercase mb-20 flex gap-4">
        <img
          src={ScrollEye}
          alt="Scroll Eye"
          className="w-20 h-20 transform scale-x-[-1]"
        />
        <h3 className="bg-gradient-to-r from-green-accent via-blue-500 to-pink-accent bg-clip-text text-transparent">
          What sets us apart
        </h3>
        <img src={ScrollEye} alt="Scroll Eye" className="w-20 h-20" />
      </div>
      <div className="flex w-full px-[20%]">
        <div className="w-1/2 flex flex-col gap-10 items-center">
          <div className="flex justify-center items-center h-96 w-80 rounded-md bg-blue-accent">
            <img
              src={ScrollKing}
              alt="Scroll King"
              className="h-96 object-contain transform scale-x-[-1]"
            />
          </div>
          <div className="flex flex-col gap-2 font-dmsans text-white font-bold text-2xl justify-evenly">
            <span>✅ Fair Launch</span>
            <span>✅ Burnt LP token</span>
            <span>✅ Fuck Scroll</span>
            <span>✅ Be REALscoll</span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-10 items-center">
          <div className="flex justify-center items-center h-96 w-80 rounded-md bg-pink-accent">
            <img src={BadScroll} alt="Bad Scroll" className="h-96 object-contain" />
          </div>
          <div className="flex flex-col gap-2 font-dmsans text-white font-bold text-2xl justify-evenly">
            <span>❌ But toilet paper roll for </span>
            <span>❌ Wipe someone&apos;s ass</span>
            <span>❌ Shit like $sRC</span>
          </div>
        </div>
      </div>
    </div>
  );
};
