import React from 'react';
import navButton from './navButton';
import './navList.css';
import data from '../links-data.json'

function navList() {

    const spaces = data.map(({ title }, i) => {
        return (
          <navButton
            id={i}
            name={title}
          />
        )
      })
  
    return (
      <div className="navList">
        { spaces }
      </div>
    )
  }

export default navList

