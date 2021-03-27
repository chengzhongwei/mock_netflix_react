import React, { useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { fetch, add, remove } from "../actions/userActions"
import List from './List'

const Layout = props => {
  // Pass down all the props from store
  const {
    mylist,
    recommendations,
    add,
    remove
  } = props;

  useEffect(() => {
      props.fetch()
  },[fetch])

  return (
    <div className="container">
      <h1>Hi, Chad Wei</h1>
      <h2>My List</h2>
      <div className="list-item">
      {
        mylist.length ? (
          <List data = { mylist } 
              handleClick={ remove } 
              eventText = {"Remove"} />
        ) : (
          <figure>No content</figure>
        )
      }
      </div>
      <h2>Recommendations</h2>
      <div className="list-item">
      {
        recommendations.length ? (
          <List data = { recommendations } 
              handleClick={ add } 
              eventText = {"Add"} />
        ) : (
          <figure>No content</figure>
        )
      }
      </div>
      <h2>Title Lists:</h2>
      <ul className="titleOnly">
        <List data = { mylist } titleOnly = { true } />
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  mylist: state.data.mylist,
  recommendations: state.data.recommendations
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetch,
    add,
    remove
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
