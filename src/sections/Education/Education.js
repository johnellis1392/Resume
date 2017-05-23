import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from 'common/styles/GlobalStyles.scss'
import styles from './Education.scss'
import strings from './strings.json'
import _ from 'underscore'


export default class Education extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ""
  }


  _renderEducationItems = (items) => {
    return _.map(items, ({description}, index) => {
      return (
        <div key={index} className={styles.description}>
          {description}
        </div>
      )
    })
  }

  _renderEducation = (sources) => {
    return _.map(sources, ({location, rewards, subtitle, items}, index) => {
      return (
        <div key={index} className={styles.source}>
          <div className={styles.title}>
            <div className={styles.location}>{location}</div>
            <div>/</div>
            <div className={styles.rewards}>{rewards}</div>
          </div>
          <div className={styles.subtitle}>{subtitle}</div>
          {this._renderEducationItems(items)}
        </div>
      )
    })
  }

  render () {
    let className = `${styles.wrapper} ${this.props.className}`
    return (
      <div className={className}>
        <div className={`${styles.header} ${GlobalStyles.header}`}>{strings.header}</div>
        <div className={styles.sources}>
          {this._renderEducation(strings.sources)}
        </div>
      </div>
    )
  }
}

