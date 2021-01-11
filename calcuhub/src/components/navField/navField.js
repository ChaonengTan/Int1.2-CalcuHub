import React from 'react';
import NavButton from './navButton';
import './navField.css';
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

    return (
      <div className="navField">
        { spaces }
      </div>
    )
  }

export default navList

