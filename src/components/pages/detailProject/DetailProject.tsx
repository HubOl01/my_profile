import { useParams } from 'react-router-dom';
import { projects } from '../../../data/my_projects';
import style from '../detailProject/style.module.scss'



export default function DetailProject() {
    const { id } = useParams();
    const data = projects.filter(project => (project.id.toString() === id))[0];

    return (
        <>
            <h1>
                {data.title}
            </h1>
            
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
