package com.bupt.controller;

import com.bupt.common.utils.NetworkUtil;
import com.bupt.common.utils.StringUtil;
import com.bupt.dao.mapper.BbuMapper;
import com.bupt.model.Bbu;
import com.bupt.model.Filter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
    if (filter == null || StringUtil.getFilter(filter) == null) {
      List<Bbu> arrayList = bbuMapper.getAll();
      return ResponseEntity.status(HttpStatus.OK)
          .headers(NetworkUtil.getHeaders(range, arrayList.size()))
          .body(arrayList);
    } else {
      Filter realFilter = StringUtil.getFilter(filter);
      List<Bbu> arrayList = bbuMapper.getAllbyNetworkId(realFilter.getValue());
      return ResponseEntity.status(HttpStatus.OK)
          .headers(NetworkUtil.getHeaders(range, arrayList.size()))
          .body(arrayList);
    }
  }

  @GetMapping("/api/bbus/{id}")
  public Bbu getOne(@PathVariable("id") int id) {
    return bbuMapper.getOne(id);
  }
}
