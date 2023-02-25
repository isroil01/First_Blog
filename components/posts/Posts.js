import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './posts.module.css';
import Java from '../../public/img/bg3.jpeg';
import Type from '../../public/img/type.png';
const DUMMY_DATA = [
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
]

const Posts = () => {
  return (
    <div className={classes.post}>
      <div className={classes.mini_nav}>
        <ul>
            <li>All</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>General</li>
            <li>Css</li>
            <li>React</li>
        </ul>
      </div>
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
                 <p>September 23, 2022</p>
                  
                 </div>
               </div>
            )
        }   
        </div>
    </div>
  )
}

export default Posts