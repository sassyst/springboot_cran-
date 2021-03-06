package com.bupt.controller;

import com.bupt.common.utils.NetworkUtil;
import com.bupt.common.utils.StringUtil;
import com.bupt.dao.mapper.UeMapper;
import com.bupt.model.Filter;
import com.bupt.model.Rru;
import com.bupt.model.Ue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UeController {
  @Autowired private UeMapper ueMapper;

  @GetMapping("api/ues")
  public ResponseEntity getList(
      @RequestParam(name = "filter", required = false) String filter,
      @RequestParam(name = "range", required = false) String range,
      @RequestParam(name = "sort", required = false) String sort) {

    if (filter == null || StringUtil.getFilter(filter) == null) {
      List<Ue> arrayList = ueMapper.getAll();
      return ResponseEntity.status(HttpStatus.OK)
              .headers(NetworkUtil.getHeaders(range, arrayList.size()))
              .body(arrayList);
    } else {
      Filter realFilter = StringUtil.getFilter(filter);
      List<Ue> arrayList = ueMapper.getAllbyNetworkId(realFilter.getValue());
      return ResponseEntity.status(HttpStatus.OK)
              .headers(NetworkUtil.getHeaders(range, arrayList.size()))
              .body(arrayList);
    }
  }
}
