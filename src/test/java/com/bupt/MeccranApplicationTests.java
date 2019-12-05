package com.bupt;

import com.bupt.dao.mapper.ConfigMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MeccranApplicationTests {
  @Autowired private ConfigMapper configMapper;

  @Test
  public void testQuery() throws Exception {
    System.out.println(configMapper.getAll());
    System.out.println(configMapper.getOne(0));
    System.out.println(configMapper.getAllbyNetworkId(0));
  }
}
