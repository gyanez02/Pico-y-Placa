import logo from './logo.svg';
import './App.css';
import VehicleContainer from './components/VehicleContainer';
import {Paper}  from '@material-ui/core';

function Formulario() {
  return (
    <div className="App">
      <Paper>
     <VehicleContainer/>
     </Paper>
    </div>
  );
}

export default Formulario;
