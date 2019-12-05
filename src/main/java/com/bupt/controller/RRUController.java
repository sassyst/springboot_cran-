package com.bupt.controller;

import com.bupt.common.utils.NetworkUtil;
import com.bupt.common.utils.StringUtil;
import com.bupt.dao.mapper.RruMapper;
import com.bupt.model.Bbu;
import com.bupt.model.BbuPool;
import com.bupt.model.Filter;
import com.bupt.model.Rru;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RRUController {

  private Logger logger = LoggerFactory.getLogger(this.getClass());

  @Autowired private RruMapper rruMapper;

  @GetMapping("api/rrus")
  public ResponseEntity getList(
      @RequestParam(name = "filter", required = false) String filter,
      @RequestParam(name = "range", required = false) String range,
      @RequestParam(name = "sort", required = false) String sort) {
    if (filter == null || StringUtil.getFilter(filter) == null) {
      List<Rru> arrayList = rruMapper.getAll();
      return ResponseEntity.status(HttpStatus.OK)
              .headers(NetworkUtil.getHeaders(range, arrayList.size()))
              .body(arrayList);
    } else {
      Filter realFilter = StringUtil.getFilter(filter);
      List<Rru> arrayList = rruMapper.getAllbyNetworkId(realFilter.getValue());
      return ResponseEntity.status(HttpStatus.OK)
              .headers(NetworkUtil.getHeaders(range, arrayList.size()))
              .body(arrayList);
    }
  }

  @GetMapping("/api/rrus/{id}")
  public Rru getOne(@PathVariable("id") int id) {
    return rruMapper.getOne(id);
  }
}
