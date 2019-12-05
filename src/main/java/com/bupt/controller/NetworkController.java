package com.bupt.controller;

import com.bupt.common.utils.NetworkUtil;
import com.bupt.model.NetWork;
import com.bupt.model.Result;
import com.bupt.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class NetworkController {

  @GetMapping("/api/networks/{id}")
  public ResponseEntity<Object> getById(@PathVariable("id") int id) {
    User tan = new User();
    tan.setUserName("tanjin");
    tan.setAvatar("https://s3.amazonaws.com/uifaces/faces/twitter/petar_prog/128.jpg");
    int bbuPoolNum = (int) (Math.random() * 3);
    int bbuNum = (int) (Math.random() * 10);
    int i = 1;
    NetWork netWork =
        new NetWork(
            i,
            bbuPoolNum,
            bbuNum,
            (int) (Math.random() * 15),
            (int) (Math.random() * 20),
            (int) (Math.random() * 20),
            "实验" + i + "由" + tan.getUserName() + "创建",
            tan);
    return new ResponseEntity<>(netWork, HttpStatus.OK);
  }

  @GetMapping("/api/networks")
  public ResponseEntity<Object> getList(
      @RequestParam(name = "filter", required = false) String filter,
      @RequestParam(name = "range", required = false) String range,
      @RequestParam(name = "sort", required = false) String sort) {
    System.out.println(range);
    ArrayList<NetWork> arrayList = new ArrayList<>();
    User tan = new User();
    tan.setUserName("tanjin");
    tan.setAvatar("https://s3.amazonaws.com/uifaces/faces/twitter/petar_prog/128.jpg");
    User zhangtao = new User();
    zhangtao.setUserName("zhangtao");
    zhangtao.setAvatar("https://s3.amazonaws.com/uifaces/faces/twitter/taybenlor/128.jpg");

    for (int i = 0; i < 10; i++) {
      int bbuPoolNum = (int) (Math.random() * 3);
      int bbuNum = (int) (Math.random() * 10);
      arrayList.add(
          new NetWork(
              i,
              bbuPoolNum,
              bbuNum,
              (int) (Math.random() * 15),
              (int) (Math.random() * 20),
              (int) (Math.random() * 20),
              "实验" + i + "由" + tan.getUserName() + "创建",
              tan));
    }
    for (int i = 10; i < 20; i++) {
      int bbuPoolNum = (int) (Math.random() * 3);
      int bbuNum = (int) (Math.random() * 10);
      arrayList.add(
          new NetWork(
              i,
              bbuPoolNum,
              bbuNum,
              (int) (Math.random() * 15),
              (int) (Math.random() * 20),
              (int) (Math.random() * 20),
              "实验" + i + "由" + tan.getUserName() + "创建",
              zhangtao));
    }

    return ResponseEntity.status(HttpStatus.OK)
        .headers(NetworkUtil.getHeaders(range, arrayList.size()))
        .body(arrayList);
  }
}
