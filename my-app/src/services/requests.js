import axios from 'axios'

const baseURL = 'http://localhost:8080/api/vehicle';
export async function saveVehicle(vehicleData){
     axios.post(baseURL, {
        plateNumber: vehicleData.placa,
        model: vehicleData.model,
        color: vehicleData.color,
        chasis: vehicleData.chasis

      })
      .then(function (response) {
        console.log(response);
      })

     
}