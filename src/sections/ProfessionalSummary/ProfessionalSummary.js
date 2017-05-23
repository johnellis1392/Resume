import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ProfessionalSummary.scss'
import GlobalStyles from 'common/styles/GlobalStyles.scss'
import _ from 'underscore'


export default class ProfessionalSummary extends Component {

  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
      header: PropTypes.string,
      summary: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          description: PropTypes.string
        })
      )
    })
  }

  static defaultProps = {
    className: ""
  }

  _renderItems = (items) => {
    return _.map(items, ({label, description}, index) => {
      return (
        <div key={index} className={styles.bulletItem}>
          <div className={styles.label}>{label}</div>
          <div className={styles.description}>{description}</div>
        </div>
      )
    })
  }

  render () {
    const className = `${styles.wrapper} ${this.props.className}`
    const {
      header,
      summary,
      items
    } = this.props.data
    return (
      <div className={className}>
        <div className={`${styles.header} ${GlobalStyles.header}`}>{header}</div>
        <div className={styles.summary}>{summary}</div>
        <div className={styles.bulletList}>
          {this._renderItems(items)}
        </div>
      </div>
    )
  }
}


