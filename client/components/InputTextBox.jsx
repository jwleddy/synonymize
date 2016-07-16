import React from 'react'
import { connect } from 'react-redux'
import { } from '../actions/index'
import InputTextUnit from './InputTextUnit.jsx'

class InputTextBox extends React.Component {
  constructor(props) {
    super(props)
  }

  let textUnitNodes = this.props.words.map((word) => {
    <InputTextUnit>
      word
    </InputTextUnit>
  })

  render() {
    return(
      <div>
        {textUnitNodes}
      </div>
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
)(InputTextBox)
