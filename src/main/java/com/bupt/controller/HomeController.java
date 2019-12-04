package com.bupt.controller;

import com.bupt.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

  @PostMapping("api/login")
  public ResponseEntity<Object> login(@RequestBody User user) {
    if (user.getUserName().equals("tanjin") && user.getPassWord().equals("950109")) {
      return new ResponseEntity<Object>(user, HttpStatus.OK);
    }
    return new ResponseEntity<Object>(user, HttpStatus.UNAUTHORIZED);
  }

  @GetMapping("api/hello")
  public String hello() {
    return "hello world";
  }
}
