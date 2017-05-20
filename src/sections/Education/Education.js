import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Education.scss'


export default class Education extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ""
  }

  render () {
    let className = `${styles.wrapper} ${this.props.className}`
    return (
      <div className={className}>
        Education
      </div>
    )
  }
}

