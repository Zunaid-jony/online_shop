import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ButtonBase, ButtonGroup } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ItemCardModal = ({open, handleClose, handleOpen,allItem}) => {
    const { imgSrc, name, ratings, price } = allItem;
    
    return (
       
      
       <div>
            <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <img style={{width:'60%' }} src={imgSrc}>
              </img>
              <p>  {name} Price $ {price}</p>
     
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button>add card</Button>
          </Box>
          
        </Modal>
       </div>
    
    );
};

export default ItemCardModal;