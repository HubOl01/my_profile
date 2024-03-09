import React from 'react'
import styles from './styles.module.scss'
import { Grid } from '@mui/material'
import { CircularProgressWithLabel } from '../atoms/circularProgressWithLabel'
import { my_skills } from '../../data/my_skills'

export default function Common() {
  return (
    <div className={styles.center_common}>
      <h2>Немного о себе</h2>
      <p>

      </p>
      <h2>
        Мои навыки
      </h2>
      <Grid container margin={2} textAlign={"center"} rowGap={5}>
        {
          my_skills.map((skill) =>
            <Grid xs={6}>
              <div style={{"background": "red", justifyContent: "center", justifyItems: "center", justifySelf}} >
                {skill.name}
                 <CircularProgressWithLabel value={skill.progress * 100} />

              </div>
            </Grid>
          )
        }
        {/*         
        <Grid xs={6} ><CircularProgressWithLabel value={my_skills[0].progress}/></Grid> */}
        {/* <Grid xs={6} ><CircularProgressWithLabel value={}/><</Grid>
        <Grid xs={6} ><CircularProgressWithLabel value={}/><</Grid>
        <Grid xs={6} ><CircularProgressWithLabel value={}/><</Grid>
        <Grid xs={6} ><CircularProgressWithLabel value={}/><</Grid>
        <Grid xs={6} ><CircularProgressWithLabel value={}/><</Grid> */}
      </Grid>
      {/* <h2>Хобби</h2>
      <p>
        Я люблю изучать что-то новое. Я программирую на языке программирования
        C# и продолжаю осваивать язык в некоторых направлениях. (Например:
        создание мобильных приложений Xamarin и создание игр Unity)
      </p>
      <h2>Спорт</h2>
      <p>
        Я более 10 лет занимаюсь конькобежным спортом. В 16 лет выполнил
        спортивный разряд кандидат в мастера спорта. Кроме этого, с начала 1
        курса я начал заниматься легкой атлетикой. Принимаю участие в
        соревнованиях в составе сборной ИГХТУ.
      </p> */}
    </div>
  )
}
