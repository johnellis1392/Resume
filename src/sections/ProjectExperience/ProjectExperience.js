import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectExperience.scss'


export default class ProjectExperience extends Component {

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
        ProjectExperience
      </div>
    )
  }
}


