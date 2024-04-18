package com.example.oblig3data1700;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Main {
    @GetMapping("/")
    public String hei(String navn){
        return "Hei verden "+navn;
    }
}

