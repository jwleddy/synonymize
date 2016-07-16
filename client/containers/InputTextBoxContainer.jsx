import React from 'react'
import { connect } from 'react-redux'
import { } from '../actions/index'
import InputTextBox from '../components/InputTextBox.jsx'

class InputTextBoxContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div
        className="inputTextBoxContainer"
      >
        <InputTextBox />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTextBoxContainer)
