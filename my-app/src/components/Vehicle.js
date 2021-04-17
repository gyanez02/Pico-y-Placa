import React, {useState} from "react";
import { Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiFormControl-root': {
        margin: theme.spacing(1),
        width: '80%',
      },
    },
  }));



const initialVehicleValues = {
    placa: '',
    color: '',
    model: '',
    chasis: '',
}

const Vehicle = ({handleSubmit})=>{
    const classes = useStyles();

    const [values, setValues] = useState(initialVehicleValues);
    const [selectedDate, setSelectedDate] = useState(new Date());

   

    const _handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values);
        console.log(selectedDate);
        handleSubmit({...values,selectedDate});

    }

    const handleChange = (e) =>{
        const {name,value} = e.target
        setValues({...values, [name]: value})
    }

    return (

        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={_handleSubmit} >
                <Grid container>
                    <Grid item xs={12}><label>Vehicle not registered!, please register it below </label></Grid>
                    <Grid item xs={6}><TextField  name="placa" label="Plate" placeholder="pxj0789 " variant="outlined"  value={values.placa} onChange={handleChange}/></Grid>
                    <Grid item xs={6}><TextField  name="color" label="Color" variant="outlined" value={values.color} onChange={handleChange}/></Grid>
                    <Grid item xs={6}><TextField  name="model" label="Model" variant="outlined" value={values.model} onChange={handleChange}/></Grid>
                    <Grid item xs={6}><TextField  name="chasis" label="Chasis" variant="outlined" value={values.chasis} onChange={handleChange}/></Grid>
                    <Grid item xs={12}><Button variant="contained" color="primary" type="submit">Register Vehicle</Button></Grid>
                
                </Grid>
        
    </form>
           

        </div>
    );
}

export default Vehicle;