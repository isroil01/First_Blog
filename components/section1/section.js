import classes from './section.module.css';
import Java from '../../public/img/bg3.jpeg';
import Type from '../../public/img/type.png';
import Image from 'next/image'
import Link from 'next/link'
import {AiFillLinkedin,AiFillFacebook,AiFillInstagram,AiFillGithub} from 'react-icons/ai'


const Section = () => {
    const DUMMY_DATA=[
        {
            id: '1',
            title: 'Do You want to learn  JavaScript?',
            desc: 'javascript is one fo the best and popular language.Javascript mainly used for web development',
            image: Java
        },
        {
            id: '2',
            title: 'What is the difference between javascript and typescript?',
            desc: 'what are the benefites of typescript Vs javascript',
            image: Type
         },
         {
            id: '2',
            title: 'What is the difference between javascript and typescript?',
            desc: 'what are the benefites of typescript Vs javascript',
            image: Type
         },
         {
            id: '1',
            title: 'Do You want to learn  JavaScript?',
            desc: 'javascript is one fo the best and popular language.Javascript mainly used for web development',
            image: Java
        }
    ]
  return (
    <div className={classes.section}>
        <div className={classes.box_1}>
        {
            DUMMY_DATA.map((item) =>
               <div className={classes.card_1} key={item.id}> 
                 <div className={classes.card_box_1}><Image src={item.image}  alt='image' /></div>
                 <div className={classes.card_box_2}>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <Link className={classes.btn} href='/'>Read more</Link>
                 </div>
                 <div className={classes.date}>
                  September 23, 2022
                 </div>
               </div>
            )
        }   
        </div>
        <div className={classes.box_2}>
            <div className={classes.founder_box}>
                <div className={classes.founder}>Founder</div>
                <div className={classes.founder_img}>
                    <Image src='/img/avatar.png' width={400} height={200} alt='founder' />
                </div>
                <div className={classes.founder_desc}>
                    <h2>R.Isroiljon</h2>
                    <p>A founder of the company is one who establishes the business and works for its betterment relentlessly while gathering the necessary workforce to achieve the same. The founder of a company is one who establishes the company or the one who brings the company into existence</p>
                </div>
                <div className={classes.founder_icon}>
                    <Link href=''>
                        <AiFillLinkedin />
                    </Link>
                    <Link href=''>
                        <AiFillFacebook />
                    </Link>
                    <Link href=''>
                        <AiFillInstagram />
                    </Link>
                    <Link href=''>
                        <AiFillGithub />
                    </Link>
                </div>
            </div>
            <div className={classes.recent_box}>
                <h1>Recent posts</h1>
                <div className={classes.recent_card}>
                    {
                        DUMMY_DATA.map((item) =>
                        <div className={classes.recent_card_box} key={item.id}>
                            <div className={classes.recent_card_img}>
                                <Image width={200} height={100} src={item.image} alt='recent' />
                            </div>
                            <div className={classes.recent_card_text}>
                                <h2>{item.desc}</h2>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section