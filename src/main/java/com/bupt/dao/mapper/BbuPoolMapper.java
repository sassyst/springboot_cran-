package com.bupt.dao.mapper;

import com.bupt.model.BbuPool;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface BbuPoolMapper {
  @Select("SELECT * FROM BbuPool")
  @Results({
    @Result(property = "id", column = "BbuPoolId"),
    @Result(property = "lat", column = "X"),
    @Result(property = "lng", column = "Y"),
  })
  List<BbuPool> getAll();

  @Select("SELECT * FROM Bbu Where network_id = #{network_id}")
  @Results({
    @Result(property = "id", column = "BbuPoolId"),
    @Result(property = "lat", column = "X"),
    @Result(property = "lng", column = "Y"),
  })
  List<BbuPool> getAllbyNetworkId(@Param("network_id") int network_id);

  @Select("SELECT * FROM Bbu Where BbuId = #{id}")
  @Results({
    @Result(property = "id", column = "BbuPoolId"),
    @Result(property = "lat", column = "X"),
    @Result(property = "lng", column = "Y"),
  })
  BbuPool getOne(@Param("id") int id);
}
