import { LuBell } from "react-icons/lu";
import { LuBellDot } from "react-icons/lu";

const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-between my-4 items-center">
        <h1 className="font-semibold text-lg">
          FamilyFriends
        </h1>
        <LuBellDot size={25} />
      </nav>
    </header>
  );
};

export default Header;
