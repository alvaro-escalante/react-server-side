import React, { Component } from 'react'
import Views from './Views'
import Pages from './Pages'
// Create model and logic state component
export default class App extends Component {
  // Set constructor to access props
  constructor(props) {
    super(props)
    // Defined current page by checking url against Pages data
    let currentPage;
    Pages.forEach(page => {
      if (page.url === props.location.pathname) currentPage = page.name
    })
    // Set state
    this.state = {
      mobileActive: false,             // Mobile menu hidden
      width: global.innerWidth <= 950, // Width is less or equal to Desktop 
      page: currentPage                // Page equal to url
    }
  }
  // Invoque parallax and mobile menu on scroll and resize(use global not window for node.js)
  componentWillMount() {
    global.onscroll = () => this.handleParallax()
    global.onresize = () => this.handleResize()
  }
  // toggle mobile menu, Check that mobile width is true
  handleMobile = () => {
    if (this.state.width)
      this.setState({ mobileActive: !this.state.mobileActive })
  }
  // Set the current page to item clicked
  handlePage = (pageName) => 
    this.setState({page: pageName})
  // Set Parallax effect
  handleParallax = () =>  
    this.setState({ parallax: { backgroundPosition: `50% ${(global.pageYOffset * 0.5)}px`}})
  // Toggle mobile menu and check width
  handleResize = () => 
    this.setState({ mobileActive: false, width: global.innerWidth <= 950})
  // Send render to component Views
  render() {
    // Shorthand for this.state.*
    const {parallax, mobileActive, width, page} = this.state
    // Return Views with state passed as props and functions
    return (
      <Views 
        parallax={parallax}
        mobileActive={mobileActive}
        width={width}
        page={page}
        handleMobile={this.handleMobile}
        handlePage={this.handlePage}
        children={this.props.children}
      />
    )
  }
}