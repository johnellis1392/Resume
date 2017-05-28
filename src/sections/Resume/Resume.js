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

  static propTypes = {
    data: PropTypes.shape({
      education: PropTypes.object,
      header: PropTypes.object,
      professionalSummary: PropTypes.object,
      projectExperience: PropTypes.object,
      workExperience: PropTypes.object
    })
  }

  render () {
    const {
      header,
      education,
      professionalSummary,
      projectExperience,
      workExperience
    } = this.props.data

    return (
      <div className={styles.wrapper}>
        <Header data={header} className={styles.header} />
        <Spacer className={styles.spacer} />
        <ProfessionalSummary data={professionalSummary} className={`${styles.professionalSummary} ${styles.section}`} />
        <Spacer className={styles.spacer} />
        <WorkExperience data={workExperience} className={`styles.workExperience ${styles.section}`} />
        <Spacer className={styles.spacer} />
        <ProjectExperience data={projectExperience} className={`styles.projectExperience ${styles.section}`} />
        <Spacer className={styles.spacer} />
        <Education data={education} className={`styles.education ${styles.section}`} />
      </div>
    )
  }
}

