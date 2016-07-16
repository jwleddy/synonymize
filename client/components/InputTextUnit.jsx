import React from 'react'
import { connect } from 'react-redux'
import { } from '../actions/index'

class InputTextUnit extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
    <span>
      {this.props.children}
    </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // Nothing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // Nothing
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTextUnit)
