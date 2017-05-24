import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from 'common/styles/GlobalStyles.scss'
import { Bullet } from 'common/components'
import styles from './Education.scss'
import _ from 'underscore'


export default class Education extends Component {

  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
      header: PropTypes.string,
      sources: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.string,
          rewards: PropTypes.string,
          subtitle: PropTypes.string,
          items: PropTypes.arrayOf(
            PropTypes.shape({
              description: PropTypes.string
            })
          )
        })
      )
    })
  }

  static defaultProps = {
    className: ""
  }


  _renderEducationItems = (items) => {
    return _.map(items, ({description}, index) => {
      return (
        <div key={index} className={styles.description}>
          <Bullet />
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
    const className = `${styles.wrapper} ${this.props.className}`
    const {
      header,
      sources
    } = this.props.data
    return (
      <div className={className}>
        <div className={`${styles.header} ${GlobalStyles.header}`}>{header}</div>
        <div className={styles.sources}>
          {this._renderEducation(sources)}
        </div>
      </div>
    )
  }
}

