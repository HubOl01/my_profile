import React from 'react'
import styles from './styles.module.scss'
import { Grid } from '@mui/material'
import { my_skills } from '../../../data/my_skills';
import ProjectCard from '../../layouts/project/ProjectCard'
import { projects } from '../../../data/my_projects'
import { CircularProgressWithLabel } from '../../layouts/circularProgressWithLabel';

export default function Common() {

  return (
    <div className={styles.center_common}>
      <h2>Немного о себе</h2>
      <p>

      </p>
      <h2>
        Мои навыки
      </h2>
      <Grid container margin={0} rowGap={0} justifyContent={"center"}>
        {
          my_skills.map((skill) =>
            skill.progress != null ? <CircularProgressWithLabel skill={skill} />
              : <div className={styles.clipLabel}>
                {
                  skill.name
                }
              </div>
          )
        }
      </Grid>

      <h2>
        Проекты
      </h2>
      <Grid container item spacing={1} columns={12}>
      {projects.map((project) =>
      (
        <Grid item xs>
          <ProjectCard project={project} />
        </Grid>
        )
        )}
        </Grid>

    </div>
  )
}
