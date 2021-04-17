package com.example.NoCircula.Vehicle;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Integer>
{
    @Query("SELECT v from Vehicle v where v.plateNumber =?1")
    Optional<Vehicle> findVehicleByPlate(String plateNumber);

    @Query("SELECT v from Vehicle v where v.plateNumber =?1")
    Vehicle findVehiclePlate(String plateNumber);
}