package com.bupt.controller;

import com.bupt.common.utils.NetworkUtil;
import com.bupt.dao.mapper.BbuMapper;
import com.bupt.model.Bbu;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BBUController {
  private Logger logger = LoggerFactory.getLogger(this.getClass());

  private final BbuMapper bbuMapper;

  public BBUController(BbuMapper bbuMapper) {
    this.bbuMapper = bbuMapper;
  }

  @GetMapping("api/bbus")
  public ResponseEntity getList(
      @RequestParam(name = "filter", required = false) String filter,
      @RequestParam(name = "range", required = false) String range,
      @RequestParam(name = "sort", required = false) String sort) {
    List<Bbu> arrayList = bbuMapper.getAll();
    if (!filter.substring(1, filter.length() - 1).equals("")) {
      List<Bbu> newarraay = new ArrayList<>();
      String left = filter.substring(1, filter.length() - 1).split(":")[0];
      String right = filter.substring(1, filter.length() - 1).split(":")[1];
      int value = Integer.parseInt(right);
      String key = left.substring(1, left.length() - 1);
      logger.info("value" + value);
      logger.info("key" + key);
      if (key.equals("network_id")) {
        for (Bbu bbu : arrayList) {
          if (bbu.getNetwork_id() != null && bbu.getNetwork_id() == value) {
            newarraay.add(bbu);
          }
        }
      }
      logger.info("newarraay" + newarraay);

      return ResponseEntity.status(HttpStatus.OK)
          .headers(NetworkUtil.getHeaders(range, newarraay.size()))
          .body(newarraay);
    } else {
      logger.info("arrayList" + arrayList);
      return ResponseEntity.status(HttpStatus.OK)
          .headers(NetworkUtil.getHeaders(range, arrayList.size()))
          .body(arrayList);
    }
  }
}
