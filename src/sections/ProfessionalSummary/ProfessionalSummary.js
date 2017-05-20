import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ProfessionalSummary.scss'


export default class ProfessionalSummary extends Component {

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
        ProfessionalSummary
      </div>
    )
  }
}


