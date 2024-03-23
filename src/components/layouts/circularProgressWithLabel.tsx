
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { ISkill } from '../../data/my_skills';
import { Box, Grid } from '@mui/material';

interface circularProgressWithLabelProps {
  skill: ISkill
}

export function CircularProgressWithLabel(
  { skill }: circularProgressWithLabelProps
) {
  return (
    <>
      <Grid xs={6}
      >
        <Box sx={{
          // height: "50px",
          "textAlign": "right",
          // background: "red",
        }}
        >
          <Grid container padding={2}>
            <Grid xs={8} sx={{
              minWidth: "100px",
              textAlign: "left",
              margin: "auto"
            }}>{skill.name}</Grid>
            <Grid xs={4} sx={{ textAlign: "right", margin: "auto", minWidth: "80px" }}>
              <Box sx={{
                maxWidth: "100px"
              }}>
                <CircularProgressbarWithChildren
                  value={skill.progress! * 100}
                  strokeWidth={10}
                  styles={buildStyles({
                    pathColor: "white",
                  })}
                >
                  <div style={{ fontSize: "medium ", marginTop: -15 }}>
                    {`${skill.progress! * 100}%`}
                  </div>
                </CircularProgressbarWithChildren>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

// export default function CircularWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }
