import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'react-bootstrap'
import {
  Education,
  Header,
  ProfessionalSummary,
  ProjectExperience,
  WorkExperience
} from 'sections'
import { Spacer } from 'common/components'
import styles from './Resume.scss'


export default class Resume extends Component {

  static propTypes = {}

  render () {
    return (
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <Spacer className={styles.spacer} />
        <ProfessionalSummary className={styles.professionalSummary} />
        <Spacer className={styles.spacer} />
        <WorkExperience className={styles.workExperience} />
        <Spacer className={styles.spacer} />
        <ProjectExperience className={styles.projectExperience} />
        <Spacer className={styles.spacer} />
        <Education className={styles.education} />
      </div>
    )
  }
}

