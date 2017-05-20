import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import styles from './Spacer.scss'


export default class Spacer extends Component {
  
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
        <div className={styles.spacer} />
      </div>
    )
  }
}

