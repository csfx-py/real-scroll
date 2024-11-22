export const Story = () => {
  return (
    <div className="px-[5%] py-40 flex gap-8 bg-secondary">
      <div className="w-1/3 bg-primary rounded-md">test</div>
      <div className="w-2/3 flex flex-col gap-4 py-4">
        <h3 className="text-6xl text-primary font-anton leading-snug uppercase">
          “Once Upon a Time... <br />
          &nbsp;&nbsp;in the Land of Dispensable Dreams”
        </h3>
        <p className="text-lg text-primary font-dmsans px-8">
          Once upon a time, in the land of dispensable dreams, there lived TP
          Roll, a quirky and passionate toilet paper roll with a love for all
          things crypto, Web3, and meme coins. <br />
          <br /> TP wasn&apos;t your average utility product—he was a visionary.
          After feeling burned by the $SCR Airdrop (literally crap 💩), TP
          declared, “It&apos;s time to wipe the slate clean.”
          <br />
          <br />
          And so, REALscroll was born—setting the gold standard for fair,
          rewarding, and hilarious airdrops. TP became a legend, proving that
          even a humble roll can leave its mark on the crypto world.
        </p>
        <button className="bg-blue-accent ml-8 w-fit py-4 px-8 rounded-md font-dmsans text-primary text-lg"
          style={{
            boxShadow: "4px -4px 0 rgba(31, 35, 38, 0.8)",
          }}
        >Read More</button>
      </div>
    </div>
  );
};
