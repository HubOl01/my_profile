import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { IProject } from '../../../data/my_projects';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
    project: IProject;
}

export default function ProjectCard({project}: ProjectCardProps) {
    const navigate = useNavigate();
    return (
        <>
            <Card sx={{
                aspectRatio: 16 / 9,
                borderRadius: "10px",
                height: "100%",
                width: "100%"
            }}>
                <CardActionArea sx={{
                    border: "transparent"
                }}
                onClick={()=> navigate(`/project/${project.id}`)}
                >
                    <CardMedia
                        component="img"
                    // height="140"
                    image={project.url_background}
                    // alt="green iguana"
                    />
                    <CardContent>
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
