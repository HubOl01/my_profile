import React from 'react'
import styles from './styles.module.scss'
import { Box, Grid } from '@mui/material'
import { my_skills } from '../../data/my_skills'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'

export default function Common() {
  return (
    <div className={styles.center_common}>
      <h2>Немного о себе</h2>
      <p>

      </p>
      <h2>
        Мои навыки
      </h2>
      <Grid container margin={2} rowGap={0}>
        {
          my_skills.map((skill) =>
            <Grid xs={6}
            >
              <Box sx={{
                // height: "50px",
                "textAlign": "right",
                // background: "red",
              }}
              >
                <Grid container padding={2}>
                  <Grid xs={8} sx={{
                    minWidth: "100px",
                    textAlign: "left",
                    margin: "auto"
                  }}>{skill.name}</Grid>
                  <Grid xs={4} sx={{ textAlign: "right", margin: "auto", minWidth: "80px" }}>
                    {/* <CircularProgressWithLabel value={skill.progress * 100} /> */}
                    <Box sx={{
                      maxWidth: "100px"
                    }}>

                    <CircularProgressbarWithChildren
                      value={skill.progress * 100}
                      strokeWidth={10}
                      // text={`${skill.progress * 100}%`}
                      styles={buildStyles({
                        // textColor: "white",
                        pathColor: "white",
                        // textSize: "20px"
                        // trailColor: "gold"
                      })}
                    >
                      <div style={{ fontSize: "medium ", marginTop: -15}}>
                        {`${skill.progress * 100}%`}
                      </div>
                    </CircularProgressbarWithChildren>
                    </Box>
                  </Grid>
                </Grid>







              </Box>
            </Grid>
          )
        }
       
      </Grid>
      <h2>
        Проекты
      </h2>
    </div>
  )
}
