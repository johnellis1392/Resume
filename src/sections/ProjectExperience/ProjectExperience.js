import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from 'common/styles/GlobalStyles.scss'
import { BulletList } from 'common/components'
import styles from './ProjectExperience.scss'
import _ from 'underscore'


export default class ProjectExperience extends Component {

  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
      header: PropTypes.string,
      projects: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          subtitle: PropTypes.string,
          url: PropTypes.string,
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


  _renderProjectItems = (projects) => {
    return _.map(projects, ({title, subtitle, url, items}, index) => {
      return (
        <div key={index} className={styles.project}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
          <BulletList className={styles.items}>
            {_.map(items, ({description}, index) => {
              return (
                <div key={index} className={styles.item}>
                  {description}
                </div>
              )
            })}
          </BulletList>
        </div>
      )
    })
  }

  render () {
    const className = `${styles.wrapper} ${this.props.className}`
    const {
      header,
      projects
    } = this.props.data
    return (
      <div className={className}>
        <div className={`${styles.header} ${GlobalStyles.header}`}>{header}</div>
        <div className={styles.projects}>
          {this._renderProjectItems(projects)}
        </div>
      </div>
    )
  }
}


