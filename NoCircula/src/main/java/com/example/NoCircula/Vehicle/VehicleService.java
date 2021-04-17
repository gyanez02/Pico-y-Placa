package com.example.NoCircula.Vehicle;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class VehicleService {
    private final VehicleRepository vehicleRepository;

    @Autowired
	public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    public Vehicle getVehicle(String plateNumber, String validationDate, int hour, int minute){
        Vehicle vehicle = vehicleRepository.findVehiclePlate(plateNumber);
        vehicle.setCanDrive(picoPlaca(plateNumber, validationDate,hour,minute));
        
        return vehicle;
    }
  
    public void addNewVehicle(Vehicle vehicle) {
        Optional<Vehicle> vehicleOptional = vehicleRepository.findVehicleByPlate(vehicle.getPlateNumber());
        if(vehicleOptional.isPresent()){
            throw new IllegalStateException("Vehicle already registered");
        }
        vehicleRepository.save(vehicle);
    } 

    public boolean picoPlaca(String plateNumber, String validationDate, int hour, int minute){

        char lastNumber = plateNumber.charAt(plateNumber.length()-1);
        LocalDate myDate =LocalDate.parse(validationDate);
        DayOfWeek day = myDate.getDayOfWeek();
        int dayOfWeek = day.getValue();
        boolean canDrive = true;


        if (dayOfWeek==1 &&( lastNumber == '1' || lastNumber == '2')&&hourRange(hour, minute)){
            canDrive = false;
        }
        else if(dayOfWeek==2 &&( lastNumber == '3' || lastNumber == '4')&&hourRange(hour, minute)){
            canDrive = false;
        }
        else if(dayOfWeek==3 &&( lastNumber == '5' || lastNumber == '6' )&&hourRange(hour, minute)){
            canDrive = false;
        }
        else if(dayOfWeek==4 &&( lastNumber == '7' || lastNumber == '8' )&&hourRange(hour, minute)){
            canDrive = false;
        }
        else if(dayOfWeek==5 &&( lastNumber == '9' || lastNumber == '0')&&hourRange(hour, minute)){
            canDrive = false;
        }
        else {
            canDrive = true;
        }
        return canDrive;
    }


    public boolean hourRange(int hour, int minute)
    {
        boolean isInRange= false;
        if(hour>7&&hour<10)
        {
            isInRange=true;
            if(hour==9&&minute>=30){
                isInRange= false;
            }
            
        }
        else if(hour>16&&hour<20)
        {
            isInRange=true;
            if(hour==19&&minute>=30){
                isInRange= false;
            }

        }
        return isInRange;
    }


    


}
