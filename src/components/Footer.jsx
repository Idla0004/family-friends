import { BiHomeAlt } from "react-icons/bi";
import { IoStarOutline } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full backdrop-blur-xl p-2 pb-6 bg-[#ffffff33] rounded-t-4xl">
      <ul className="flex gap-18 justify-center py-2">
        <li>
          <BiHomeAlt size={25} color="#ACACAC" />
        </li>
        <li>
          <IoStarOutline
            size={25}
            color="#ACACAC"
          />
        </li>
        <li>
          <BsChat size={25} color="#ACACAC" />
        </li>
        <li>
          <FiUser size={25} color="#ACACAC" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
