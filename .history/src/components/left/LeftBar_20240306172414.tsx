import './LeftBar.style.scss'
import { Card, Grid, Paper } from '@mui/material'
import about from '../../assets/images/About.jpg'
import isuct from '../../assets/images/isuct.png'
import { websites } from '../../data/websites';



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
        <div>

        </div>
        
      </Card>
    </>
  )
}

export default LeftBar