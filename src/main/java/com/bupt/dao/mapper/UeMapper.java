package com.bupt.dao.mapper;

import com.bupt.model.Ue;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface UeMapper {
  @Select("SELECT * FROM Ue")
  @Results({
    @Result(property = "id", column = "UeId"),
    @Result(property = "lat", column = "X"),
    @Result(property = "lng", column = "Y"),
  })
  List<Ue> getAll();

  @Select("SELECT * FROM Bbu Where network_id = #{network_id}")
  List<Ue> getAllbyNetworkId(@Param("network_id") int network_id);

  @Select("SELECT * FROM Bbu Where BbuId = #{id}")
  List<Ue> getOne(@Param("id") int id);
}
