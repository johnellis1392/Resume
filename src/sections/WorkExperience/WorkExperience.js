import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from 'common/styles/GlobalStyles.scss'
import styles from './WorkExperience.scss'
import _ from 'underscore'


export default class WorkExperience extends Component {

  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
      header: PropTypes.string,
      jobs: PropTypes.arrayOf(
        PropTypes.shape({
          company: PropTypes.string,
          position: PropTypes.string,
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


  _renderItemList = (items) => {
    return _.map(items, ({description}, index) => {
      return (
        <div key={index} className={styles.item}>
          <div className={styles.description}>{description}</div>
        </div>
      )
    })
  }

  _renderWorkHistory = (jobs) => {
    return _.map(jobs, ({company, position, subtitle, items}, index) => {
      return (
        <div key={index} className={styles.job}>
          <div className={styles.summary}>
            <div className={styles.company}>{company}</div>
            <div>/</div>
            <div className={styles.position}>{position}</div>
          </div>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.itemList}>
            {this._renderItemList(items)}
          </div>
        </div>
      )
    })
  }

  render () {
    const className = `${styles.wrapper} ${this.props.className}`
    const {
      header,
      jobs
    } = this.props.data
    return (
      <div className={className}>
        <div className={`${styles.header} ${GlobalStyles.header}`}>{header}</div>
        <div className={styles.workHistory}>
          {this._renderWorkHistory(jobs)}
        </div>
      </div>
    )
  }
}


