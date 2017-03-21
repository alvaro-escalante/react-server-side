import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import Pages from './Pages'

export default class Views extends Component{

	componentWillMount() {
    if (typeof window !== 'undefined') {
      window.onscroll = () => this.props.handleParallax()
      window.onresize = () => this.props.handleResize()
    }
  }
		
  render() {

  	const {parallax, mobileActive, width, page, handleMobile, handlePage, children} = this.props;

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
  		      <div onClick={() => handleMobile()} className={width && mobileActive? 'nav-mobile' : 'nav'}>
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
}