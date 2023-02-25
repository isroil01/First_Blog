import React from 'react'
import classes from './search.module.css'

const search = () => {
  return (
    <div className={classes.search}>
        <h1>Search Blogs</h1>
        <div className={classes.search_input}> 
        <input type='text' className={classes.text_input} /> 
        <input type='submit' className={classes.submit} value='search' /> 
        </div>
    </div>
  )
}

export default search