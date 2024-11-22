export const Footer = () => {
  return (
    <div className="mt-10">
      <div className="bg-gradient-to-r from-green-accent/50 via-blue-accent/50 to-pink-accent/50 py-40 flex justify-center items-center">
        <span className="text-primary font-dmsans text-lg font-semibold text-center w-[50%]">
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
