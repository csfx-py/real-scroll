import HeroImg from "../assets/scroll.png";

export const Hero = () => {
  return (
    <div className="flex flex-col bg-blue-accent text-white gap-8 pt-10">
      <h1 className="text-7xl font-normal text-center uppercase font-anton">
        The real $SCROLL
      </h1>
      <div
        className=""
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "90vh",
        }}
      >
        <div className="flex flex-col bg-gradient-to-b from-blue-accent via-blue-accent/60 to-transparent h-14 text-white">
          <p className="text-lg text-center font-dmsans">
            Don&apos;t miss out on the comeback SCROLL wishes they could make.
            Stay REAL.
          </p>
        </div>
      </div>
    </div>
  );
};
