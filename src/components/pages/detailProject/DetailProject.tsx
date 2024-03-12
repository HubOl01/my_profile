import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../../../data/my_projects';
import style from '../detailProject/style.module.scss'
import { AppBar, IconButton, ImageList, ImageListItem, Toolbar } from '@mui/material';
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
                        onClick={() => navigate(-1)}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    {/* <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}> */}
                    {/* Photos */}
                    {/* </Typography> */}
                    <h2>
                        {data.title}
                    </h2>
                </Toolbar>
            </AppBar>

            <div>
                <strong>
                    {data.creator}
                </strong>
            </div>
            <div style={{}}>
            <ImageList sx={{
                flexWrap: 'nowrap',
            }} cols={data.url_images.length+2} gap={10}>
                {data.url_images.map((img) => (
                    <ImageListItem key={img} sx={{
                        display: 'flex',
                        width: '250px'
                    }}>
                        <img className={style.img_screen} src={img!} alt={img!} onDragStart={(event) => event.preventDefault()} />
                    </ImageListItem>
                ))}

            </ImageList>
            </div>
            




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
