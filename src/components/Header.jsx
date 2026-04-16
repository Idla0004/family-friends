import { LuBellDot } from "react-icons/lu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-between my-4 items-center">
        <Link href={"/"}>
          <h1 className="font-semibold text-lg">
            FamilyFriends
          </h1>
        </Link>
        <LuBellDot size={25} />
      </nav>
    </header>
  );
};

export default Header;
