import Link from "next/link";
import classes from "../styles/Home.module.css";
import Image from "next/image";
import BackImage from "../../public/img/bg1.jpg";
import Half from "../../public/img/half.jpg";

export default function Home() {
  return (
    <div className={classes.home}>
      <Image
        className={classes.img}
        src={Half}
        width={900}
        height={750}
        alt="half"
      />
      <div className={classes.mini_con}>
        <div className={classes.text_con}>
          <h1>Welcome To My Blog</h1>
          <p>
            I will share my knowledgr through this Blogs and i will share it
            everyday. In this blog you can be aware of every updates in{" "}
            <b>Web Developments</b> and <b>IT industry</b>{" "}
          </p>
          <div className={classes.btn_con}>
          <Link className={classes.logIn} href={""}>
            Log in
          </Link>
          <Link className={classes.read} href="">
            Discover
          </Link>
          </div>
        </div>
        <div className={classes.img_con}>
          <Image quality={60} src={BackImage} alt="back"  />
        </div>
      </div>
    </div>
  );
}
