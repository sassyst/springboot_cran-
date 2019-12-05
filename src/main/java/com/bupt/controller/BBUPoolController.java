package com.bupt.controller;

import com.bupt.common.utils.NetworkUtil;
import com.bupt.common.utils.StringUtil;
import com.bupt.dao.mapper.BbuPoolMapper;
import com.bupt.model.BbuPool;
import com.bupt.model.Filter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BBUPoolController {

  @Autowired private BbuPoolMapper bbuPoolMapper;

  @GetMapping("api/bbupools")
  public ResponseEntity getList(
      @RequestParam(name = "filter", required = false) String filter,
      @RequestParam(name = "range", required = false) String range,
      @RequestParam(name = "sort", required = false) String sort) {

    if (filter == null || StringUtil.getFilter(filter) == null) {
      List<BbuPool> arrayList = bbuPoolMapper.getAll();
      return ResponseEntity.status(HttpStatus.OK)
          .headers(NetworkUtil.getHeaders(range, arrayList.size()))
          .body(arrayList);
    } else {
      Filter realFilter = StringUtil.getFilter(filter);
      List<BbuPool> arrayList = bbuPoolMapper.getAllbyNetworkId(realFilter.getValue());
      return ResponseEntity.status(HttpStatus.OK)
          .headers(NetworkUtil.getHeaders(range, arrayList.size()))
          .body(arrayList);
    }
  }

  @GetMapping("/api/bbupools/{id}")
  public BbuPool getOne(@PathVariable("id") int id) {
    return bbuPoolMapper.getOne(id);
  }
}
