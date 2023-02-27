import React from 'react';
import classes from '../styles/about.module.css';
import Image from 'next/image'
import Avatar from '../../public/img/avatar.png';

const about = () => {
  return (
    <div className={classes.about}>
        <div className={classes.mini_con}>
            <Image src={Avatar} alt='' width={400} height={200} />
        </div>
        <div className={classes.text_con}>
        <h1>I am Front-End Web Developer</h1>
        <p>i do love writing code and solving problems</p>
        <div className={classes.large_con}>
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
        <div>
            <p><b>stacks: </b></p>
            <p><b>Language: </b></p>
            <p><b>Tools: </b> </p>
            <p><b>App: </b> </p>
            <p><b>Others: </b> </p>
         </div>
         <div>
            <p>React.js , Neaxt.js, TypeScript</p>
            <p>JavaScript</p>
            <p> Redux,MaterialUi,BootStrap</p>
            <p>React-native</p>
            <p>HTML5,CSS</p>
         </div>
        </div>
        </div>
       
        </div>
        <div className={classes.contact}>
          <h2>About me</h2>
          <div className={classes.contact_con}>
             <p> I am Isroiljon and i am a Front-end web developer.
                I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.
                And these are the things that i know <b> HTML5,CSS3(Sass,Scss),
                Bootstrap,MaterialUi,JavaScript,
                jQuery,React.js,Next.js,
                TypeScript,Mongodb,
                Next Auth, And for mobil dvelopment React-native </b>.
             </p>
          </div>
        </div>
    </div>
  )
}

export default about