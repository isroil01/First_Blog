import Link from "next/link";
import classes from "../styles/Home.module.css";
import Image from "next/image";
import BackImage from "../../public/img/bg1.jpg";
import Half from "../../public/img/half.jpg";
import Section from '../../components/section1/section';
import {useSession,signIn,signOut} from 'next-auth/react'

export default function Home() {
  const {data:session} = useSession()
  
  return (
    <div className={classes.home}>
    <div className={classes.inner_home}>
    <Image src={Half} alt='' width={950} height={750} className={classes.image} />
      <div className={classes.mini_con}>
        <div className={classes.text_con}>
          <h1>Welcome To My Blog</h1>
          <p>
            I will share my knowledgr through this Blogs and i will share it
            everyday. In this blog you can be aware of every updates in{" "}
            <b>Web Developments</b> and <b>IT industry</b>{" "}
          </p>
          <div className={classes.btn_con}>
          <button className={classes.logIn} >
            Log in
          </button>
          <button className={classes.read} >
            Discover
          </button>
          </div>
        </div>
        <div className={classes.img_con} />
      </div>
    </div>
      <Section />
  </div>
  );
}
