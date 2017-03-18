import React from 'react'
import { IndexLink, Link } from 'react-router'

export default (props) => {

  setTimeout(() => {
    const parallax = document.querySelectorAll(".parallax"),
          speed = 0.5;

    window.onscroll = () => {
      [].slice.call(parallax).forEach((el,i) => {
        let windowYOffset = window.pageYOffset,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
        el.style.backgroundPosition = elBackgrounPos;
      });
    }
  }, 100)

return (
  <div>
    <div className='header module parallax'>
      <Link to="/"><img src='../img/logo.svg' className='logo' alt='React Logo' /></Link>
      <Link to="/"><h1>React &amp; SEO</h1></Link>
    </div>
    
    <div className='wrapper'>
      <div className='navWrap' id='bar'>
        <div className='nav'>
          <IndexLink activeClassName='active' to='/'>Home</IndexLink>
          <IndexLink activeClassName='active' to='/what-is-react'>About</IndexLink>
          <IndexLink activeClassName='active' to='/why-react'>Why</IndexLink>
          <IndexLink activeClassName='active' to='/background'>Background</IndexLink>
          <IndexLink activeClassName='active' to='/react-myths'>Myths</IndexLink>
          <IndexLink activeClassName='active' to='/resources'>Resources</IndexLink>
          <IndexLink activeClassName='active' to='/builtvisible'>builtvisible</IndexLink>
        </div>
      </div>
      <div className='container' id='cont'>
        {props.children}
      </div>
    </div>
  </div>
  )
}