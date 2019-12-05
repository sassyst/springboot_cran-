package com.bupt.controller;

import com.bupt.common.utils.NetworkUtil;
import com.bupt.common.utils.StringUtil;
import com.bupt.dao.mapper.ConfigMapper;
import com.bupt.dao.mapper.WirelessLinkModelMapper;
import com.bupt.model.Config;
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
public class ConfigController {
  @Autowired private ConfigMapper configMapper;
  @Autowired private WirelessLinkModelMapper wirelessLinkModelMapper;

  @GetMapping("api/configs")
  public ResponseEntity getList(
      @RequestParam(name = "filter", required = false) String filter,
      @RequestParam(name = "range", required = false) String range,
      @RequestParam(name = "sort", required = false) String sort) {
    if (filter == null || StringUtil.getFilter(filter) == null) {
      List<Config> arrayList = configMapper.getAll();
      return ResponseEntity.status(HttpStatus.OK)
          .headers(NetworkUtil.getHeaders(range, arrayList.size()))
          .body(arrayList);
    } else {
      Filter realFilter = StringUtil.getFilter(filter);
      List<Config> arrayList = configMapper.getAllbyNetworkId(realFilter.getValue());
      return ResponseEntity.status(HttpStatus.OK)
          .headers(NetworkUtil.getHeaders(range, arrayList.size()))
          .body(arrayList);
    }
  }

  @GetMapping("/api/configs/{id}")
  public Config getOne(@PathVariable("id") int id) {
   return configMapper.getOne(id);
  }
}
