import React from 'react'
import ResultItem from './ResultItem'
class ResultList extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (<div className="result-list">
      {this.props.data.map((item, index) => {
        return (<ResultItem key={index} title={item.title}></ResultItem>)
      })
      }    </div>

    )}
}

export default ResultList
