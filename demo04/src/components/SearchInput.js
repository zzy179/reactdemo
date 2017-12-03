import React from 'react'

class SearchInput extends React.Component {
  constructor() {
    super()
  }
  clickHandle (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.value);
  }
  render() {
    return (<div>
      <input type="input" onChange={this.clickHandle}></input>
    </div>)
  }
}
export default SearchInput
