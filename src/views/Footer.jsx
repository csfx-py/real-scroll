import Heaven from "../assets/scrollHeaven.jpeg";

export const Footer = () => {
  return (
    <div className="flex flex-col text-white">
      <div
        className="flex flex-col justify-between pb-10"
        style={{
          backgroundImage: `url(${Heaven})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "105vh",
        }}
      >
        <div className="flex flex-col bg-gradient-to-b from-blue-accent via-blue-accent/60 to-transparent h-14 text-white"></div>
        <span className="text-2xl font-semibold font-dmsans text-center px-[30%]">
          Forget the hype, see how REALscroll plays it smart. From real
          timelines to no-BS milestones, we&apos;re the anti-fail blueprint.
        </span>
      </div>
      <div className="flex bg-primary justify-between items-center py-8 px-[10%]">
        <span className="text-secondary font-dmsans text-lg font-semibold px-8 capitalize">
          all right reserved 2024 REALscroll
        </span>
        <div className="flex gap-4 mr-8">
          <div className="h-8 w-8 bg-white rounded-md"></div>
          <div className="h-8 w-8 bg-white rounded-md"></div>
          <div className="h-8 w-8 bg-white rounded-md"></div>
        </div>
      </div>
    </div>
  );
};
