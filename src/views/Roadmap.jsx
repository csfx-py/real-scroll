import { useRef, useEffect, useState } from "react";
import { RoadmapNode } from "../components/RoadmapNode";
import { useMemo } from "react";
import ScrollEye from "../assets/scrollLookingOpen.png";

export const Roadmap = () => {
  const [paths, setPaths] = useState([]);
  const roadmapRef = useRef(null);

  const nodes = useMemo(
    () => [
      {
        title: "Phase 1",
        description: "Fuck SCROLL and MEME",
        variant: "green-accent",
        top: "100px",
      },
      {
        title: "Phase 2",
        description:
          "Get toilet paper rolls trending everywhere on X (Twitter)",
        variant: "blue-accent",
        top: "400px",
      },
      {
        title: "Phase 3",
        description: "Toilet Paper Rolls rule the world.",
        variant: "pink-accent",
        top: "700px",
      },
    ],
    []
  );

  useEffect(() => {
    const newPaths = [];
    const roadmap = roadmapRef.current;
    if (roadmap) {
      const nodeElements = roadmap.querySelectorAll("[data-index]");
      let maxHeight = 0;
      nodeElements.forEach((node, index) => {
        if (index < nodeElements.length - 1) {
          const nextNode = nodeElements[index + 1];
          const x1 =
            node.offsetLeft +
            node.offsetWidth / 2 -
            (index % 2 === 0 ? 240 : 0);
          const y1 = node.offsetTop + node.offsetHeight;
          const x2 =
            nextNode.offsetLeft +
            nextNode.offsetWidth / 2 -
            (index % 2 !== 0 ? 240 : 0);
          const y2 = nextNode.offsetTop;
          const path = `M${x1},${y1} C${x1},${y1 + 200} ${x2},${
            y2 - 200
          } ${x2},${y2}`;
          newPaths.push(path);
        }
        const nodeBottom = node.offsetTop + node.offsetHeight;
        if (nodeBottom > maxHeight) {
          maxHeight = nodeBottom;
        }
      });
      roadmap.style.height = `${maxHeight + 100}px`; // Add some padding
    }
    setPaths(newPaths);
  }, [nodes]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-secondary text-7xl font-anton uppercase mb-20 flex gap-4">
        <img src={ScrollEye} alt="Scroll Eye" className="w-20 h-20" />
        <h3 className="bg-gradient-to-r from-green-accent via-blue-500 to-pink-accent bg-clip-text text-transparent">
          Roadmap
        </h3>
        <img
          src={ScrollEye}
          alt="Scroll Eye"
          className="w-20 h-20 transform scale-x-[-1]"
        />
      </div>
      <div ref={roadmapRef} className="relative w-[800px] min-h-screen">
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
        <svg className="absolute top-0 left-0 w-full h-full">
          {paths.map((path, index) => (
            <path
              key={index}
              d={path}
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};
