import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../../../data/my_projects';
import style from '../detailProject/style.module.scss'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function DetailProject() {
    const { id } = useParams();
    const data = projects.filter(project => (project.id.toString() === id))[0];
    const navigate = useNavigate();
    return (
        <>
        <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>navigate(-1)}
          >
            <ArrowBackIcon />
          </IconButton>
          {/* <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}> */}
            {/* Photos */}
          {/* </Typography> */}
          <h1>
                {data.title}
            </h1>
        </Toolbar>
      </AppBar>
            
            <div>
                <strong>
                    {data.creator}
                </strong>
            </div>
            {data.url_images?.map((img) => (
                <img className={style.img_screen} src={img!} alt={img!} />
            ))}

            <div className={style.description}>
                {data.description.map((line, index) => (
                    <div key={index}>
                        <div>{line}</div>
                        {line == "\n" ? <br /> : <></>}
                    </div>
                ))}

            </div>
        </>
    )
}
