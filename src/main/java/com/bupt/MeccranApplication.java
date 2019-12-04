package com.bupt;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.bupt.dao.mapper")
public class MeccranApplication {

  public static void main(String[] args) {
    SpringApplication.run(MeccranApplication.class, args);
  }
}
