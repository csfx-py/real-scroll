import PropTypes from "prop-types";

export const Collaborator = ({ imageUrl }) => {
  return (
    <div className="rounded-full bg-secondary h-28 w-28">
      {imageUrl && <img
        src={imageUrl}
        alt="collaborator"
        className="rounded-full h-28 w-28"
      />}
    </div>
  );
};

Collaborator.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
