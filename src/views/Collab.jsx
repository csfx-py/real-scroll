import { Collaborator } from "../components/Collaborator";

export const Collab = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-brown-accent">
      <h3 className="text-primary text-7xl font-anton uppercase">
        Collaborations
      </h3>
      <div
        className="flex p-20 w-full"
        style={{
          background: "linear-gradient(175deg, #B8926D 49%, #1f2326 50%)",
        }}
      >
        <div className="flex flex-col w-full border-2 border-primary bg-pink-accent rounded py-8 px-20 gap-8">
          <div className="flex justify-evenly flex-row-reverse">
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <div className="h-14 w-14"></div>
          </div>
          <div className="flex justify-evenly">
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <Collaborator imageUrl="" />
            <div className="h-14 w-14"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
