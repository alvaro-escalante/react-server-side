import React, { Component } from 'react'
import Views from './Views'
import Pages from './Pages'

export default class App extends Component {
  constructor(props) {
    super(props);

    var currentPage = null;

    for (var i = Pages.length - 1; i >= 0; i--) {
      if (Pages[i].url === props.location.pathname)
        currentPage = Pages[i].name
    }

    this.state = {
      parallax: { backgroundPosition: null },
      mobileActive: false,
      width: (typeof window !== 'undefined') ? window.innerWidth <= 950 : 1024,
      page: currentPage
    }
  }

  handleParallax = () => {
    (typeof window !== 'undefined')
      ? this.setState({ parallax: { backgroundPosition: `50% ${(window.pageYOffset * 0.5)}px`}})
      : null
  }

  handleResize = () => {
    (typeof window !== 'undefined')
      ? this.setState({ mobile: false, width: window.innerWidth <= 950})
      : null
  }

  handleMobile = () =>  
    this.setState({ mobileActive: !this.state.mobileActive })

  handlePage = pageName => 
    this.setState({page: pageName})

  render() {

    const {parallax, mobileActive, width, page} = this.state;
  
    return (
      <Views 
        parallax={parallax}
        mobileActive={mobileActive}
        width={width}
        page={page}
        handleMobile={this.handleMobile}
        handlePage={this.handlePage}
        handleParallax={this.handleParallax}
        handleResize={this.handleResize}
        children={this.props.children}
      />
    )
  }
}