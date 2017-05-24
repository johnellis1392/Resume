import React, { Component } from 'react'
import PropTypes from 'prop-types'
import faStyles from 'common/styles/FontAwesome.scss'
import styles from './Bullet.scss'


export default class Bullet extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ""
  }

  render () {
    const fontAwesomeStyle = faStyles.times
    const className = `${styles.wrapper} ${fontAwesomeStyle} ${this.props.className}`
    return (
      <i className={className} />
    )
  }
}

