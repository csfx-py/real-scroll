import HeroImg from "../assets/realScrollHero.jpeg";

export const Hero = () => {
  return (
    <div
      className="mt-20"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "90vh",
      }}
    >
      <div className="flex flex-col bg-gradient-to-b from-primary via-primary/90 to-transparent pb-20 text-white h-[40%] gap-4">
        <h1 className="text-7xl font-normal text-center uppercase font-anton">
          The real $SCROLL
        </h1>
        <p className="text-lg text-center font-dmsans">
          Don&apos;t miss out on the comeback SCROLL wishes they could make.
          Stay REAL.
        </p>
      </div>
    </div>
  );
};
