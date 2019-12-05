package com.bupt.controller;

import com.bupt.dao.mapper.WirelessLinkModelMapper;
import com.bupt.model.WirelessLinkModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WirelessLinkModelController {
  @Autowired private WirelessLinkModelMapper wirelessLinkModelMapper;

  @GetMapping("/api/wirelesslinkmodel/{id}")
  public WirelessLinkModel getOne(@PathVariable("id") int id) {
    return wirelessLinkModelMapper.getOne(id);
  }
}
