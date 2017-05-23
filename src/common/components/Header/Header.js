import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from 'common/styles/GlobalStyles.scss'
import styles from './Header.scss'


export default class Header extends Component {
  
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired
  }

  static defaultProps = {
    className: ""
  }

  render () {
    const className = `${styles.wrapper} ${GlobalStyles.header} ${this.props.className}`
    const {
      text
    } = this.props
    return (
      <div className={className}>
        {text}
      </div>
    )
  }
}

