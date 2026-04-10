import { BiHomeAlt } from "react-icons/bi";
import { IoStarOutline } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="">
      <ul className="flex gap-18 justify-center bg-[#ffffff33] backdrop-blur-xl">
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
