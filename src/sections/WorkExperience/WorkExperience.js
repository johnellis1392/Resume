import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './WorkExperience.scss'
import strings from './strings.json'
import _ from 'underscore'


export default class WorkExperience extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ""
  }


  _renderItemList = (items) => {
    return _.map(items, ({description}) => {
      return (
        <div className={styles.item}>
          <div className={styles.description}>{description}</div>
        </div>
      )
    })
  }

  _renderWorkHistory = () => {
    return _.map(strings.jobs, ({company, position, subtitle, items}) => {
      return (
        <div className={styles.job}>
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
    let className = `${styles.wrapper} ${this.props.className}`
    return (
      <div className={className}>
        <div className={styles.header}>{strings.header}</div>
        <div className={styles.workHistory}>
          {this._renderWorkHistory()}
        </div>
      </div>
    )
  }
}


