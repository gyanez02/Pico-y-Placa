package com.example.NoCircula.Vehicle;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.List;


@Configuration
public class VehicleConfig {
    
    @Bean
    CommandLineRunner commandLineRunner(VehicleRepository repository){
        return args -> {
         Vehicle car =  new Vehicle(
                "pcy2059",
                "rojo",
                "Kia Rio",
                "qrt-789"
                );
                repository.saveAll(List.of(car));
        };

       

    }

  
}
