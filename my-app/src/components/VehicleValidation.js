import React, {useState, useEffect} from "react";
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {saveVehicle} from '../services/requests'
import axios from 'axios'
import Vehicle from "./Vehicle";


const initialVehicleValues = {
    plateNumber: '',
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const handleSubmit = (data) =>{
    saveVehicle(data);

}
const VehicleValidation = ({plateNumber,selectedDate,selectedTime})=>{
    const [values, setValues] = useState(initialVehicleValues);
    const classes = useStyles();
    const baseURL = 'http://localhost:8080/api/vehicle';
    let year = selectedDate.getFullYear();
    let month = selectedDate.getMonth()+1;
    let day = selectedDate.getDate();
    let hour = selectedTime.getHours();
    let minute = selectedTime.getMinutes();
    if(month<10)
    {
        month= "0"+month
    }
    let formatted_date = year+ "-" + month + "-" + day
    useEffect(() => {
        axios.get(baseURL+'/'+plateNumber+'/'+formatted_date+'/'+hour+"/"+minute)
            .then((response) => {
                setValues(response.data);
                
    });
    }, [setValues]);
    let label;
    if(values.plateNumber == ""){
        return(
            <div className={classes.paper}>
                <Vehicle handleSubmit = {handleSubmit}/>
            </div>

        )
    }
    else{
        if(values.canDrive == true){
            label = <label>You can drive without restrictions that time and day</label>;
            
        }
        else{
            label = <label>You can't drive at that time and day</label>;
            
        }
        return (
    
            <div className={classes.paper}>
                    <Grid container spacing={3}>
                    <Grid item xs={12}><header class="page-header"><h1>Vehicle Data</h1></header></Grid>
                        <Grid item xs={6}><TextField  name="placa"   variant="filled" value={values.plateNumber}  /></Grid>
                        <Grid item xs={6}><TextField  name="color"   variant="filled"  value={values.color}/></Grid>
                        <Grid item xs={6}><TextField  name="model"   variant="filled" value={values.model}/></Grid>
                        <Grid item xs={6}><TextField  name="chasis"  variant="filled" value={values.chasis}/></Grid>
                        <Grid item xs={12}><label>{label}</label></Grid>
                    </Grid>
            </div>
        );
    }    
}

export default VehicleValidation;