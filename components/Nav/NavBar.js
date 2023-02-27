import Link from "next/link";
import classes from "./NavBar.module.css";
import Image from "next/image";
import Avatar from "../../public/img/avatar.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  function closeOpen() {
    setOpen(!open);
  }
  const { data: session } = useSession();
  console.log(session ? session.user.email : " no");
  useEffect(() => {
    if (session && session.user.email === "isroiljonrustamov25@gmail.com") {
      setUser(true);
    }
  }, [session]);

  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <Link href={"/"}>BlogPost</Link>
      </div>
      <button className={classes.hamburger} onClick={closeOpen}>
        {!open ? (
          <RxHamburgerMenu className={classes.burger} />
        ) : (
          <GrClose className={classes.close} />
        )}
      </button>
      <ul className={open ? classes.open : classes.ul}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"about"}>About us</Link>
        </li>
      </ul>
      <div className={classes.nav_img}>
      <ul>
        <li className={classes.li_img}>
          <Image
            className={classes.image}
            src={session ? session.user.image : Avatar}
            width={65}
            height={60}
            alt="login"
          />
          <ul className={classes.mini_nav}>
            {session ? (
              <li onClick={() => signOut()}>
                Log Out
              </li>
            ) : (
              <li >
              <button onClick={() => signIn()}>
                Log In
              </button>
                
              </li>
            )}
            {user ? (
              <li>
                <Link href={"/"}>Add Post</Link>
              </li>
            ) : null}
          </ul>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
