import React from 'react';
import classes from '../styles/about.module.css';
import Image from 'next/image'
import Avatar from '../../public/img/avatar.png';

const about = () => {
  return (
    <div className={classes.about}>
        <div className={classes.mini_con}>
            <Image src={Avatar} alt='' width={300} height={200} />
        </div>
        <div className={classes.text_con}>
        <h1>I am Front-End Web Developer</h1>
        <p>i do love writing code and solving problems</p>
        <div className={classes.inner_text_con}>
         <div>
            <p><b>Name: </b></p>
            <p><b>Age: </b></p>
            <p><b>University: </b> </p>
            <p><b>Degree: </b> </p>
         </div>
         <div>
            <p>Isroiljon</p>
            <p>22</p>
            <p> JBNU</p>
            <p>undergraduate</p>
         </div>

        </div>
        <div className={classes.second_con}>
            
        </div>
        </div>
    </div>
  )
}

export default about