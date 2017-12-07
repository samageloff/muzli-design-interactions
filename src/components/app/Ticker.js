import React, { Component } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import StyledDiv from 'src/components/common/styled/StyldDiv'
import { number } from 'prop-types'
import { currentTick } from 'src/selectors/timer'

export class Ticker extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    currentTick: number
  }

  shouldComponentUpdate = nextProps => {
    if (nextProps.currentTick !== this.props.currentTick) return true

    return false
  }

  styles = () => Immutable.fromJS({
    alignItems: 'center',
    color: 'rgb(255, 255, 255)',
    display: 'flex',
    fontSize: '7rem',
    flexDirection: 'column',
    fontWeight: 'bold',
    justifyContent: 'center',
    width: '100%',
    zIndex: '3'
  })

  render = () => (
    <StyledDiv css={this.styles()}>{this.props.currentTick}</StyledDiv>
  )
}

const mapStateToProps = state => {
  return {
    currentTick: currentTick(state)
  }
}

export default connect(mapStateToProps)(Ticker)