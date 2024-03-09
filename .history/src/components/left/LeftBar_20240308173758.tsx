import styles from './LeftBar.module.scss';
import { Card, Grid } from '@mui/material';
import about from '../../assets/images/About.jpg';
import isuct from '../../assets/images/isuct.png';
import { websites } from '../../data/websites';
import { nickname } from '../../data/my_projects';

const list_web = websites.map((web) =>
  <Grid item xs>
    <div className="web">
      <a
        href={web.href}
        title={web.title}
      >
        <img
          className="img-icon"
          alt={web.alt}
          src={web.src}
          width={40}
        />
      </a>
    </div>
  </Grid>
)


const LeftBar = () => {
  return (
    <>
      <Card elevation={5}
        sx={{
          borderRadius: 3,
        }} >
        <a title="Куличков Олег" href="https://vk.com/oleg01f">
          <img
            alt="about"
            src={about}
            style={{
              // borderRadius: '15px',
              display: 'flex',
              width: "100%",
            }}
            data-holder-rendered="true"
          />
        </a>
        <div style={{ padding: "5px 10px 10px 10px" }}> /* top, right, bottom, left */
          <div>
            <p>
              <b>Куличков Олег</b>
            </p>
            <p>
              <b>Псевдоним: {nickname}</b>
            </p>
            <p>
              <span >День рождения:</span> 8 декабря
            </p>
            <p>
              <span className="text-format">Город:</span> Иваново
            </p>
            <p>
              Студент ИГХТУ
              <img
                className="isuct"
                alt="ISUCT"
                src={isuct}
                width={20}
                style={{ "marginLeft": "10px" }}
              // data-holder-rendered="true"
              />
            </p>
            <p>
              <span className="text-format">Факультет:</span> Факультет техники,
              управления и цифровой инфраструктуры
            </p>
            <p>
              <span className="text-format">Специальность:</span> Информационные
              системы и технологии
            </p>
            {/* <p style={{
              "textAlign": "center",
              "justifyContent": "center",
              display: 'flex',
              width: "100%",

          }}>
            <span className="text-format">Социальные сети</span>
          </p> */}

            <Grid container spacing={2}
            
              sx={{
                'textAlign': "center",
                // display: 'flex',
                // width: "100%",
              }
              }>
              {list_web}
            </Grid>

          </div>
        </div>


      </Card>
    </>
  )
}

export default LeftBar