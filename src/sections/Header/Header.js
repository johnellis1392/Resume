import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Header.scss'


export default class Header extends Component {

  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      github: PropTypes.string,
      gitlab: PropTypes.string
    })
  }

  static defaultProps = {
    className: ""
  }

  render () {
    const className = `${styles.wrapper} ${this.props.className}`
    const {
      name,
      phone,
      email,
      github,
      gitlab
    } = this.props.data
    return (
      <div className={className}>
        <div className={styles.left}>
          <div className={styles.name}>{name}</div>
        </div>
        <div className={styles.right}>
          <div>{phone}</div>
          <div>{email}</div>
          <div>{github}</div>
          <div>{gitlab}</div>
        </div>
      </div>
    )
  }
}

