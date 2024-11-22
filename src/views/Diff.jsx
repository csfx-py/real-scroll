export const Diff = () => {
  return (
    <div className="relative px-[10%] flex justify-center items-center py-12">
      <div
        className="flex w-full rounded-md bg-[#ecfffd]/30 z-50 p-8 gap-10"
        style={{
          backdropFilter: "blur(2px)",
        }}
      >
        <div className="flex w-1/2 gap-4">
          <div className="h-60 w-60 bg-secondary rounded-md"></div>
          <div className="flex flex-col gap-2 font-dmsans text-white font-bold text-2xl justify-evenly">
            <span>✅ Fair Launch</span>
            <span>✅ Burnt LP token</span>
            <span>✅ Fuck scroll</span>
            <span>✅ Be REALscroll</span>
          </div>
        </div>
        <div className="flex flex-row-reverse w-1/2 gap-4">
          <div className="h-60 w-60 bg-secondary rounded-md"></div>
          <div className="flex flex-col gap-2 font-dmsans text-white font-bold text-2xl justify-evenly capitalize">
            <span>❌ But toilet paper roll for elon</span>
            <span>❌ Wipe someone&apos;s ass</span>
            <span>❌ Shit like $sRC</span>
          </div>
        </div>
      </div>
      <div
        className="absolute z-10 font-anton text-7xl text-white leading-[89.33px]"
        style={{
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        What Sets Us Apart
      </div>
    </div>
  );
};
