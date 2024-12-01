import ScrollXD from "../assets/scrollXDIcon.png";
export const Marquee = () => {
  return (
    <div className="relative overflow-hidden flex items-center transform -rotate-[5deg]">
      <div
        className="flex whitespace-nowrap text-white text-xl font-dmsans font-semibold gap-4 w-full"
        style={{ animation: "marquee 8s linear infinite" }}
      >
        {Array(20)
          .fill()
          .map((_, index) => (
            <div key={index} className="flex items-center flex-shrink-0 w-[10%] gap-4">
              <img src={ScrollXD} className="w-10" />
              <span className="font-anton text-4xl font-light">$SCROLL</span>
            </div>
          ))}
      </div>
    </div>
  );
};
