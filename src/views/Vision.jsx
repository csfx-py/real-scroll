import { Marquee } from "../components/Marquee";

export const Vision = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-14 bg-secondary">
      <div
        className="flex p-20 w-full"
        style={{
          background: "linear-gradient(175deg, #1f2326 49%, #b1b1b1 50%)",
        }}
      ></div>
      <h3 className="text-primary text-7xl font-anton uppercase mt-20 text-center w-[50%] px-[9%]">
        LEt&apos;s get you from the WC, to the moon
      </h3>
      <p className="text-primary text-lg font-dmsans text-center w-[50%] font-medium">
        SCROLL had a big vision - too bad it flopped harder than a meme coin.
        They hyped us up, teased &quot;big things coming,&quot; and then hit us
        with a major psyche. REALscroll is here to spill the tea on how they
        should&apos;ve launched, and yeah, we&apos;re not holding back.
      </p>

      <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full px-[20%] min-h-80">
        <div className="rounded-md col-span-1 row-span-1 bg-green-accent/50"></div>
        <div className="rounded-md col-span-1 row-span-1 bg-blue-accent/50 col-start-1 col-end-2 row-start-2 row-end-3"></div>
        <div className="rounded-md col-span-1 row-span-2 bg-pink-accent/50 col-start-2 col-end-3 row-start-1 row-end-3"></div>
        <div className="rounded-md col-span-1 row-span-2 bg-gradient-to-r from-green-accent/50 via-blue-accent/50 to-pink-accent/50 col-start-3 col-end-4 row-start-1 row-end-3"></div>
        <div className="rounded-md col-span-3 row-span-2 bg-blue-accent/50 col-start-1 col-end-4 row-start-3 row-end-5"></div>
      </div>

      <Marquee />
    </div>
  );
};
