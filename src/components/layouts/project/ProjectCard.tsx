import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { IProject } from '../../../data/my_projects';
import { useNavigate } from 'react-router-dom';
import styles from '../project/style.module.scss';

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
            }}>
                <CardActionArea sx={{
                    border: "transparent"
                }}
                    onClick={() => navigate(`/project/${project.id}`)}
                >
                    <CardMedia
                        component="img"
                        // height="140"
                        image={project.url_background}
                        sx={
                            {
                                aspectRatio: 16 / 9,
                            }
                        }
                        onDragStart={(event) => event.preventDefault()}
                    // image="../../../assets/images/My projects/WeatherKotlin/bg_img.png"
                    // alt="green iguana"
                    />
                    <CardContent sx={{ padding: '0px' }}>
                        {project.platforms.map((platform) => (<div className={styles.platforms}>
                            {
                                platform
                            }
                        </div>))}
                        <Typography gutterBottom variant="h5" component="div">
                            {project.title}
                        </Typography>

                    </CardContent>

                </CardActionArea>
                <CardActions>
                    {/* {
                        project.
                    } */}


                    <Button size="small" color="primary">
                        small
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
