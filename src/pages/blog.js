import React from 'react';
import classes from '../styles/blog.module.css';
import Search from '../../components/search/search';
import Post from '../../components/posts/Posts';

const blog = () => {
  return (
    <div className={classes.blog_con}>
        <Search />
        <Post />
    </div>
  )
}

export default blog