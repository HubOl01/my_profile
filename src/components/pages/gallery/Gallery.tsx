import { photos } from '../../../data/my_photos';
import { useState } from 'react';
import { IconButton, ImageList, ImageListItem, Link, Modal, useMediaQuery } from '@mui/material';
import styles from './style.module.scss'
import CloseIcon from '@mui/icons-material/Close';


export default function Gallery() {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [photoCurrent, setPhotoCurrent] = useState(photos[0]);
  const table = useMediaQuery('(max-width:969px) and (min-width:500px)');
  const desktop = useMediaQuery('(min-width:970px)');
  const cols = desktop ? 3 : table ? 2 : 1; // Set 3 columns for screen width >= 600px, else 2 columns
  // const photoCurrent: IPhoto = ;
  return (
    <>
      <ImageList cols={cols} >
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <IconButton
            onClick={handleClose}
            aria-label="close"
            sx={{
              margin: "10px",
              top: '0',
              right: '0',
              position: 'absolute'
            }}>
            <CloseIcon sx={{ color: 'white' }} />
          </IconButton>

          <div className={styles.modal}>

            <img className={styles.imageNormal}
              src={photoCurrent.src}
              alt={photoCurrent.alt}
              loading='lazy'
            />
            {photoCurrent.description != null ?
              <div className={styles.description} onClick={handleClose}>
                {photoCurrent.description!.map((line, index) => (
                  <div key={index}>
                    <div>{line}</div>
                    {line == "\n" || line == "" ? <br /> : <></>}
                  </div>
                ))}
                {photoCurrent.linkSource != null ?
                  <div style={{ padding: '30px 0px 0px 0px'}}>
                    Взято из источника:
                    <Link href={photoCurrent.linkSource}> {photoCurrent.linkSource}</Link>
                  </div> : <></>}

              </div>
              : <></>
            }
          </div>
        </>
      </Modal>
    </>
  )
}
