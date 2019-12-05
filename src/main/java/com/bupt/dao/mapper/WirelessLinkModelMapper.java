package com.bupt.dao.mapper;

import com.bupt.dao.handler.WirelessLinnkModelHandler;
import com.bupt.model.WirelessLinkModel;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface WirelessLinkModelMapper {
  @Select("SELECT * FROM WirelessLinkModel Where id = #{id}")
  @Results({
    @Result(
        property = "ModelType",
        column = "ModelType",
        typeHandler = WirelessLinnkModelHandler.class),
  })
  WirelessLinkModel getOne(@Param("id") int id);
}
