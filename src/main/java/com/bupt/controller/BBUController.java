package com.bupt.controller;

import com.bupt.common.utils.NetworkUtil;
import com.bupt.dao.mapper.BbuMapper;
import com.bupt.model.Bbu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BBUController {

  @Autowired private BbuMapper bbuMapper;

  @GetMapping("api/bbus")
  public ResponseEntity getList(
      @RequestParam(name = "filter", required = false) String filter,
      @RequestParam(name = "range", required = false) String range,
      @RequestParam(name = "sort", required = false) String sort) {
    List<Bbu> arrayList = bbuMapper.getAll();
    System.out.println(filter);
    System.out.println(filter.substring(1, filter.length() - 1));
    if (!filter.substring(1, filter.length() - 1).equals("")) {
      List<Bbu> newarraay = new ArrayList<>();
      String left = filter.substring(1, filter.length() - 1).split(":")[0];
      String right = filter.substring(1, filter.length() - 1).split(":")[1];
      int value = Integer.parseInt(right);
      String key = left.substring(1, left.length() - 1);
      if (key.equals("network_id")) {
        for (Bbu bbu : arrayList) {
          if (bbu.getNetwork_id() != null && bbu.getNetwork_id() == value) {
            newarraay.add(bbu);
          }
        }
      }
      return ResponseEntity.status(HttpStatus.OK)
          .headers(NetworkUtil.getHeaders(range, newarraay.size()))
          .body(newarraay);
    } else {
      return ResponseEntity.status(HttpStatus.OK)
          .headers(NetworkUtil.getHeaders(range, arrayList.size()))
          .body(arrayList);
    }
  }
}
