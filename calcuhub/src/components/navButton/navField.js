import React from 'react';
import NavButton from './navButton';
import './navList.css';
import data from './links-data.json'

function navList() {

    const spaces = data.map(({ title }, i) => {
        return (
          <NavButton
            id={i}
            name={title}
          />
        )
      })
      console.log("created spaces")

    return (
      <div className="navList">
        { spaces }
      </div>
    )
  }

export default navList

