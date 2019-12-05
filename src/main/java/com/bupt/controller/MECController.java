package com.bupt.controller;

import com.bupt.common.fake.MecUtils;
import com.bupt.model.MecServer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class MECController {
    @GetMapping("/api/mecserver")
    public ArrayList<MecServer> getList(){
       return MecUtils.fakeservers(20);
    }
}
