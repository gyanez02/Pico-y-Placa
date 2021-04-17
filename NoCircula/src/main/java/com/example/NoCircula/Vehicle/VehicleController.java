package com.example.NoCircula.Vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path = "api/vehicle")
@CrossOrigin(origins = "http://localhost:3000")
public class VehicleController {
	private final VehicleService vehicleService;
	@Autowired
	public VehicleController(VehicleService vehicleService) {
		this.vehicleService = vehicleService;
	}
	@RequestMapping(path = "{plateNumber}/{validationDate}/{hour}/{minute}", method =RequestMethod.GET)
	public Vehicle getVehicle(@PathVariable String plateNumber, @PathVariable String validationDate, @PathVariable int hour, @PathVariable int minute  ){
		System.out.println(validationDate);
		return vehicleService.getVehicle(plateNumber,validationDate,hour,minute);
	} 

	@PostMapping
	public void registerNewVehicle(@RequestBody Vehicle vehicle){
		vehicleService.addNewVehicle(vehicle);
	}
   
    
}