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
import styles from './Resume.scss'


export default class Resume extends Component {

  static propTypes = {}

  render () {
    return (
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <ProfessionalSummary className={styles.professionalSummary} />
        <WorkExperience className={styles.workExperience} />
        <ProjectExperience className={styles.projectExperience} />
        <Education className={styles.education} />
      </div>
    )
  }
}

