import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { IProject } from '../../../data/my_projects';
import { useNavigate } from 'react-router-dom';
import styles from '../project/style.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import RustoreIcon from '../../../assets/images/rustore.png';
import HuaweiIcon from '../../../assets/images/appgallery.png';
import GetAppsIcon from '../../../assets/images/getapp.png';
import Img_icon from '../img_icons/Img_icon';


interface ProjectCardProps {
    project: IProject;
}


export default function ProjectCard({ project }: ProjectCardProps) {
    const navigate = useNavigate();
    return (
        <>
            <Card sx={{
                borderRadius: "10px",
                minWidth: 300,
                // position: 'relative',
            }}>
                <CardActionArea sx={{
                    border: "transparent",
                }}
                    onClick={() => navigate(`/project/${project.id}`)}
                >
                    <CardMedia
                        component="img"
                        // height="140"
                        image={project.url_background}
                        sx={
                            {
                                // background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)',
                                aspectRatio: 16 / 9,
                                // position: 'relative',
                                // height: 0,
                                // paddingTop: '56.25%'
                            }
                        }
                        onDragStart={(event) => event.preventDefault()}
                    />

                    <div className={styles.posPlatforms}>
                        {project.platforms.map((platform) => (<div className={styles.platforms}>
                            {
                                platform
                            }
                        </div>))}
                    </div>

                    <CardContent sx={{ padding: '0px' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {project.title}
                        </Typography>
                        <div className={styles.posFullStack}>
                            {project.fullStack.map((stack) => (<div className={styles.fullStack}>
                                {
                                    stack
                                }
                            </div>))}
                        </div>

                    </CardContent>

                </CardActionArea>
                <CardActions
                    sx={{
                        justifyContent: 'space-between',
                    }}>
                        <div>
                    {project.url_stores != null ?
                        project.url_stores!.map((store) => (
                            <a href={store} style={{ color: 'black' }} onDragStart={(event) => event.preventDefault()}>
                                {store.includes("rustore") ? (
                                    <Img_icon icon={RustoreIcon}
                                    ></Img_icon>
                                ) : store.includes("huawei") ? (
                                    <Img_icon icon={HuaweiIcon}
                                    ></Img_icon>
                                ) : store.includes("app.mi") ? (
                                    <Img_icon icon={GetAppsIcon}
                                    ></Img_icon>

                                ) : <></>}
                            </a>
                        )) : <></>}
                        </div>

                    {project.url_sources.map((source) =>
                    (
                        <Button size="large" sx={{ color: 'black' }} startIcon={<GitHubIcon />}/* color="primary" */>
                            {source.includes("github") ? (
                                <>
                                    GitHub
                                </>
                            ) : <></>}
                        </Button>

                    )
                    )}
                </CardActions>
            </Card>
        </>
    )
}
