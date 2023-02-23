import Link from 'next/link'
import {AiFillLinkedin,AiFillFacebook,AiFillInstagram,AiFillGithub} from 'react-icons/ai'

import classes from './footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer_main}>
        <div className={classes.footer_1}>
            <div className={classes.logo}>BlogPost</div>
            <ul>
                <Link href=''>Blog</Link>
                <Link href=''>Contact</Link>
                <Link href=''>Status</Link>
                <Link href=''>Security</Link>
            </ul>
        </div>
        <div className={classes.footer_2}>
            <div className={classes.icon}>
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
            
            <ul>
                <Link href=''>News</Link>
                <Link href=''>Subscription</Link>
                <Link href=''>follow</Link>
                <Link href=''>privacy</Link>
                <Link href=''>careers</Link>
            </ul>
            
        </div>
    </div>
  )
}

export default Footer