import Viewer from 'react-viewer';
import { photos } from '../../../data/my_photos';
import { useState } from 'react';
import { Box, ImageList, ImageListItem, Modal } from '@mui/material';
import styles from './style.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#000',
  
  // border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
};


export default function Gallery() {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [photoCurrent, setPhotoCurrent] = useState(photos[0]);
  // const photoCurrent: IPhoto = ;
  return (
    <>
      <ImageList /* sx={{ width: 500, height: 450 }} */ cols={3} >
        {photos.map((photo) => (
          <ImageListItem key={photo.src}>
            <img
              srcSet={`${photo.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${photo.src}?w=164&h=164&fit=crop&auto=format`}
              alt={photo.alt}
              loading="lazy"
              onClick={() => {
                setPhotoCurrent(photo)
                setOpen(true)
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
            {/* <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal> */}
             <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              // style={style}
            >
              <Box sx={style}>
                <img
                  // srcSet={`${photoCurrent.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  // height={500}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                  
                  src={photoCurrent.src}
                  alt={photoCurrent.alt}
                  loading="lazy"
                />
                {photoCurrent.description != null ?
                <div>
                  {/* {photoCurrent.alt} */}
                  {photoCurrent.description!.map((line, index) => (
                    <div key={index}>
                        <div>{line}</div>
                        {line == "\n" ? <br /> : <></>}
                    </div>
                ))}
                </div>
                : <></>
                }
              </Box>
            </Modal>
    </>
  )
}
