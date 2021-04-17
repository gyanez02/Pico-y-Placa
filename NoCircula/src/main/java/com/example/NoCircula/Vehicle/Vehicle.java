package com.example.NoCircula.Vehicle;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table
public class Vehicle {

    @Id
    private String plateNumber;
    private String color;
    private String model;
    private String chasis;

    @Transient
    private LocalDate validationDate;
    

    @Transient
    private boolean canDrive;
    
    public Vehicle(){

    }

    public Vehicle(String plateNumber, String color, String model, String chasis) {
        this.plateNumber = plateNumber;
        this.color = color;
        this.model = model;
        
        this.chasis = chasis;
    }

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public LocalDate getValidationDate() {
        return validationDate;
    }

    public void setValidationDate(LocalDate validationDate) {
        this.validationDate = validationDate;
    }

    public String getChasis() {
        return chasis;
    }

    public void setChasis(String chasis) {
        this.chasis = chasis;
    }

    public boolean isCanDrive() {
        return canDrive;
    }

    public void setCanDrive(boolean canDrive) {
        this.canDrive = canDrive;
    }

    
    
}
