import React from 'react'
import { IndexLink, Link } from 'react-router'

const pages =[{
  url: '/',
  name: 'Introduction'
}, {
  url: '/what-is-react',
  name: 'What'
}, {
  url: '/why-react',
  name: 'Why'
}, {
  url: '/background',
  name: 'Background'
}, {
  url: '/resources',
  name: 'Resources'
}, {
  url: '/builtvisible',
  name: 'builtvisible'
}];


// Create view stateless componets and pass props and controllers
export default props => (
  <div>
    <div class='header module' style={props.parallax}>
      <Link to="/" aria-label="React Logo"><span class='logo'></span></Link>
      <Link to="/" aria-label="Back to Home"><div class='title'>React Server Side Rendering</div></Link>
    </div>
    <div class='wrapper'>
      <div class='nav-wrap'>
        { props.width ? 
          <div>
            <div class='nav-trigger' onClick={() => props.handleMobile()}> <span></span> </div>
            <span class='current'>
              {pages.map(page => 
                 (page.url === '/' && props.pathname === '/') || (page.url !== '/' && props.pathname.indexOf(page.url) === 0) ? page.name : null
              )}
            </span>
          </div> : null
        }
        <div onClick={() => props.handleMobile()} class={props.width && props.mobileActive ? 'nav-mobile' : 'nav'+ ' hide'}>
          {
            pages.map(page => {
              let className = 
                (page.url === '/' && props.pathname === '/') || 
                (page.url !== '/' && props.pathname.indexOf(page.url) === 0) 
                ? 'active' : null

              return <IndexLink 
                key={ page.name } 
                class={ className }
                activeClassName=''
                to={ page.url }>{ page.name }
              </IndexLink>
            })
          }
        </div>
      </div>
      <div class='container' id='cont'>{ props.children }</div>
    </div>
  </div>
)