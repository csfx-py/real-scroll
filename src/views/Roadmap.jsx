import { RoadmapNode } from "../components/RoadmapNode";

export const Roadmap = () => {
  const nodes = [
    {
      title: "Phase 1",
      description: "Fuck SCROLL and MEME",
      variant: "green-accent",
      top: "100px",
    },
    {
      title: "Phase 2",
      description: "Get toilet paper rolls trending everywhere on X (Twitter)",
      variant: "blue-accent",
      top: "400px",
    },
    {
      title: "Phase 3",
      description: "Toilet Paper Rolls rule the world.",
      variant: "pink-accent",
      top: "700px",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h3 className="text-secondary text-7xl font-anton uppercase mb-20">
        Roadmap
      </h3>
      <div className="relative w-full">
        {nodes.map((node, index) => (
          <RoadmapNode
            key={"node" + index}
            title={node.title}
            description={node.description}
            variant={node.variant}
            index={index}
            top={node.top}
          />
        ))}
      </div>
    </div>
  );
};
