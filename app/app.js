import React, { Component } from 'react'
import Views from './views'

// Create model and logic state component
export default class App extends Component {
  // Defined current page by checking url against Pages data
  // Set state
  state = {
    mobileActive: false,             // Mobile menu hidden
    width: global.innerWidth <= 950 // Width is less or equal to Desktop 
  }
  
  // Invoque parallax and mobile menu on scroll and resize(use global not window for node.js)
  // componentWillMount() {
  //   global.onscroll = () => this.handleParallax()
  //   global.onresize = () => this.handleResize()
  // }

  // toggle mobile menu, Check that mobile width is true
  handleMobile = e => {
    var el = document.getElementById('here')
    el.classList.remove('hide')
    if (this.state.width)
      this.setState({ mobileActive: !this.state.mobileActive })
  }

  // Set Parallax effect
  handleParallax = () =>  
    this.setState({ parallax: { backgroundPosition: `50% ${(global.pageYOffset * 0.5)}px`}})
  
  // Toggle mobile menu and check width
  handleResize = () => 
    this.setState({ mobileActive: false, width: global.innerWidth <= 950})
  
  // Send render to component Views
  render() {
    // Shorthand for this.state.*
    const {parallax, mobileActive, width} = this.state
    // Return Views with state passed as props and functions
    return (
      <Views 
        parallax={parallax}
        mobileActive={mobileActive}
        width={width}
        pathname={this.props.location.pathname}
        handleMobile={this.handleMobile}
        children={this.props.children}
      />
    )
  }
}