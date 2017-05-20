import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Header.scss'
import strings from './strings.json'


export default class Header extends Component {

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
        <div className={styles.left}>
          <div className={styles.name}>{strings.name}</div>
        </div>
        <div className={styles.right}>
          <div>{strings.phone}</div>
          <div>{strings.email}</div>
          <div>{strings.github}</div>
          <div>{strings.gitlab}</div>
        </div>
      </div>
    )
  }
}

