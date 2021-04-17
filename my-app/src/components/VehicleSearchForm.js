import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import Modal from '@material-ui/core/Modal';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import VehicleValidation from "./VehicleValidation";
const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const initialVehicleValues = {
  plateNumber: '',
}

const VehicleSearchForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState(initialVehicleValues);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [open, setOpen] = React.useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  const handleDateChange = (date) => {

    let today = new Date();
    if (today <= date) {
      setSelectedDate(date);
    }
    else {
      setSelectedDate(today);
    }

  };

  const handleTimeChange = (date) => {
    setSelectedTime(date);

  };



  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Pico y Placa
        </Typography>
          <form className={classes.form} noValidate>
            <TextField name="plateNumber" label="Numbers of plate" variant="outlined" value={values.plateNumber} onChange={handleChange} />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                name="date"
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date to Validate"
                value={selectedDate}
                onChange={handleDateChange}
              />

              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Pick a time"
                value={selectedTime}
                onChange={handleTimeChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </MuiPickersUtilsProvider>


            <Button variant="contained" color="primary" onClick={handleOpen} fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>Validate</Button>
          </form>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          <div className={classes.paper}><VehicleValidation plateNumber={values.plateNumber} selectedDate={selectedDate} selectedTime={selectedTime}/></div>
        </Modal>
      </Container>
    </div>
  );
}
export default VehicleSearchForm;

