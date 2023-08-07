import {AiOutlineLeft} from "react-icons/ai";
import {PiHeadset} from "react-icons/pi";
import Link from "next/link";
import styled from "./Header.module.css";

function Header() {
  return (
    <div className={styled.header}>
      <Link href={"/"}>
        <AiOutlineLeft />
      </Link>
      <PiHeadset />
    </div>
  );
}

export default Header;
