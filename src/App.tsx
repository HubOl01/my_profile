import { Grid } from '@mui/material'
import './App.css'
import Common from './components/pages/center/Common'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import LeftBar from './components/left/LeftBar'
import style from './App.module.scss'

function App() {

  return (
    <>
      <Header />
      <Grid container>
        <Grid className={style.profile} item xs={4}>
          {/* <LeftBar /> */}
        </Grid>
        <Grid item xs>
          <Common />
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}

export default App
