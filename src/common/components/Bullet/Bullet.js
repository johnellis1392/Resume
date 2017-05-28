import React, { Component } from 'react'
import PropTypes from 'prop-types'
import img from 'file-loader!../../styles/images/send.png'
import styles from './Bullet.scss'


export default class Bullet extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ""
  }

  render () {
    const className = `${styles.wrapper} ${this.props.className}`
    return (
      <div className={className}>
        <img className={styles.img} src={img} />
      </div>
    )
  }
}

