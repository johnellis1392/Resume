import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import faStyles from 'common/components/FontAwesome.scss'
import styles from './Bullet.scss'


export default class Bullet extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ""
  }

  render () {
    const fontAwesomeStyle = ""
    const className = `${styles.wrapper} ${fontAwesomeStyle} ${this.props.className}`
    return (
      <i className={className} />
    )
  }
}

