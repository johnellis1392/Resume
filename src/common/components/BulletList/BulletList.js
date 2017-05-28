import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bullet from '../Bullet'
import styles from './BulletList.scss'


export default class BulletList extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: ""
  }

  render () {
    const className = `${styles.wrapper} ${this.props.className}`
    return (
      <div className={className}>
        {React.Children.map(this.props.children, (content) => {
          return (
            <div className={styles.row}>
              <Bullet className={styles.bullet} />
              <div className={styles.content}>
                {content}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}


