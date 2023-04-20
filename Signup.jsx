import React from 'react'
import { Button, Grid } from '@material-ui/core';
import ModalDialog from './ModalDialog';
import { useState } from 'react';
export default function 
() {
    const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
        <Button variant="contained" color="primary" onClick={handleOpen}>
        Signup
      </Button>
      <ModalDialog open={open} handleClose={handleClose} />
    </div>
  )
}
