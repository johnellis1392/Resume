import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ProfessionalSummary.scss'
import GlobalStyles from 'common/styles/GlobalStyles.scss'
import strings from './strings.json'
import _ from 'underscore'


export default class ProfessionalSummary extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ""
  }

  _renderItems = () => {
    return _.map(strings.items, ({label, description}, index) => {
      return (
        <div key={index} className={styles.bulletItem}>
          <div className={styles.label}>{label}</div>
          <div className={styles.description}>{description}</div>
        </div>
      )
    })
  }

  render () {
    let className = `${styles.wrapper} ${this.props.className}`
    return (
      <div className={className}>
        <div className={`${styles.header} ${GlobalStyles.header}`}>{strings.header}</div>
        <div className={styles.summary}>{strings.summary}</div>
        <div className={styles.bulletList}>
          {this._renderItems()}
        </div>
      </div>
    )
  }
}


