import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

import '../../styles/header.styl'

const Header = () => {
  return (
    <nav className='nav-header'>
      <IndexLink to='/' activeClassName='active'>Home</IndexLink>
      {' | '}
      <Link to='sample' activeClassName='active'>Sample App</Link>
      {' | '}
      <Link to='about' activeClassName='active'>About</Link>
    </nav>
  )
}

export default Header
