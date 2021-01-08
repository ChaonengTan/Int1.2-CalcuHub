import React from 'react';
import './navButton.css';
import { Link } from 'react-router-dom';

function navButton(props) {
  const { name, id } = props
  return (
    <div className='button'>
      <Link to={`/calculators/${id}`}>
        {name}
        </Link>
    </div>
  )
}

export default navButton