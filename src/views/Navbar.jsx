import Logo from "../assets/realScrollLogo.jpeg";
export const Navbar = () => {
  return (
    <div className="bg-primary text-white py-4 px-[5%] flex justify-between items-center font-dmsans">
      <div className="flex gap-2 items-center">
        <img
          src={Logo}
          alt="RealScroll Logo"
          className="h-10 w-10 rounded-md"
        />
        <span className="text-2xl font-extrabold bg-gradient-to-r from-green-accent via-blue-500 to-pink-accent bg-clip-text text-transparent">
          RealScroll
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <button className="text-lg font-semibold">Home</button>
        <button className="text-lg font-semibold">Develop</button>
        <button className="text-lg font-semibold">Resources</button>
        <button className="text-lg font-semibold">About</button>
      </div>
      <button className="text-lg font-semibold bg-white text-[#101010] rounded-md px-10 py-4">Connect Wallet</button>
    </div>
  );
};
