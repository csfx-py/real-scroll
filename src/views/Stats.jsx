import Stat from "../assets/stat.png";
export const Stats = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-14 px-[10%] pb-10">
      <h3 className="text-secondary text-7xl font-anton uppercase mt-20 text-center w-[50%]">
        A scroll for your most intimate moments.
      </h3>
      <div className="flex justify-evenly w-full px-[15%]">
        <div className="flex flex-col justify-evenly w-full text-[#ecfffd]">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <span className="text-3xl font-anton uppercase">69%</span>
              <span className="text-2xl font-dmsans font-medium">
                Community
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <span className="text-3xl font-anton uppercase">15%</span>
              <span className="text-2xl font-dmsans font-medium">Memes</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <span className="text-3xl font-anton uppercase">10%</span>
              <span className="text-2xl font-dmsans font-medium">
                Airdrop Rewards
              </span>
            </div>
          </div>
        </div>
        <img src={Stat} alt="Stat" className="w-[540px] h-[540px]" />
        <div className="flex flex-col justify-evenly w-full text-[#ecfffd]">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <span className="text-3xl font-anton uppercase">5%</span>
              <span className="text-2xl font-dmsans font-medium">
                Devs & Team
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col">
              <span className="text-3xl font-anton uppercase">1%</span>
              <span className="text-2xl font-dmsans font-medium">TP Fund</span>
            </div>
          </div>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};
