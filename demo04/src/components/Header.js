require('./Header.css')
import React from 'react'

class Header extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (<header className="emoji-header">
      <h1>emoji</h1>
    </header>)
  }
}
export default Header
