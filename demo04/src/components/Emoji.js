import Header from './Header'
import SearchInput from './SearchInput'
import ResultList from './ResultList'
import React from 'react'
import emojiFilter from './emojiFilter'

class Emoji extends React.Component{
  constructor() {
    super()
    this.state ={
      emojiResult:emojiFilter('',20)
    }
  }
  render(){
    return(
      <div className="emoji-app">
        <Header></Header>
        <SearchInput></SearchInput>
        <ResultList data={this.state.emojiResult}></ResultList>
      </div>
    )
  }
}

export default Emoji
