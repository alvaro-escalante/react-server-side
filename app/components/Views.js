import React from 'react'
import { IndexLink, Link } from 'react-router'
import Pages from './Pages'
import Resources from './Resources'
// Create view stateless componets and pass props and controllers
export default ({parallax, mobileActive, width, page, handleMobile, handlePage, children}) => {
  // global.getElementById('here').getElementsByTagName('a')[6].classList.remove('active')
  // Check width to render mobile, map Pages obj and send page.name to handlePage 
  return (
    <div>
      <div className='header module' style={parallax}>
        <Link to="/"><span className='logo'></span></Link>
        <Link to="/"><h1>React &amp; SEO</h1></Link>
      </div>
      <div className='wrapper'>
        <div className='nav-wrap'>
          {width ? <div>
          <div className='nav-trigger' onClick={() => handleMobile()}>
            <span></span>
          </div>
          <span class='current'>{page}</span>
          </div> : null}
          <div onClick={() => handleMobile()} id='here' className={width && mobileActive ? 'nav-mobile' : 'nav'+ ' hide'}>
            {Pages.map(page => 
              <IndexLink 
                key={page.name} 
                onClick={e => handlePage(page.name)} 
                activeClassName='active'
                to={page.url}>{page.name}
              </IndexLink>
            )}
          </div>
        </div>
        <div className='container' id='cont'>
          {children}
        </div>
      </div>
    </div>
  )
}