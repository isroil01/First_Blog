import Link from "next/link";
import classes from "./NavBar.module.css";
import Image from "next/image";
import Avatar from "../../public/img/avatar.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  function closeOpen() {
    setOpen(!open);
  }
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <Link href={"/"}>BlogPost</Link>
      </div>
      <button className={classes.hamburger} onClick={closeOpen}>
        {!open ? <RxHamburgerMenu className={classes.burger} /> : <GrClose className={classes.close} />}
      </button>
      <ul className={open ? classes.open : classes.ul}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Add</Link>
        </li>
        <li>
          <Link href={"/"}>About us</Link>
        </li>
      </ul>
      <Image className={classes.image} src={Avatar} width={120} height={60} alt="login" />
    </div>
  );
};

export default NavBar;
