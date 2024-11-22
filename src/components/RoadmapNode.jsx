import PropTypes from "prop-types";

export const RoadmapNode = ({ variant, title, description, top, index }) => {
  const variants = [
    "text-primary",
    "text-secondary",
    "text-pink-accent",
    "text-green-accent",
    "text-blue-accent",
    "bg-primary",
    "bg-secondary",
    "bg-pink-accent",
    "bg-green-accent",
    "bg-blue-accent",
  ];

  return (
    <div
      className="absolute pt-10 w-60 text-center"
      style={{
        left: `${index % 2 !== 0 ? "10%" : "85%"}`,
        transform: `translateX(${
          index % 2 !== 0 ? "0" : "-100%"
        }) translateY(-50%)`,
        top: top,
      }}
    >
      <div
        className={`relative bg-white text-${variant} pt-8 pb-4 px-8 font-anton uppercase rounded-md`}
      >
        {description}
        <div
          className={`absolute bg-${variant} text-primary font-anton uppercase rounded-md p-4 top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3`}
        >
          {title}
        </div>
        <div className="hidden">
          {variants.map((v) => (
            <div key={v} className={v}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

RoadmapNode.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.number,
  top: PropTypes.string,
};
