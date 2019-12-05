package com.bupt.dao.mapper;

import com.bupt.dao.handler.IsActivityHandler;
import com.bupt.model.Rru;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface RruMapper {
  @Select("SELECT * FROM Rru")
  @Results({
    @Result(property = "id", column = "RruId"),
    @Result(property = "lat", column = "X"),
    @Result(property = "lng", column = "Y"),
    @Result(property = "vZ", column = "Z"),
    @Result(property = "vIsActivity", column = "IsActivity", typeHandler = IsActivityHandler.class),
    @Result(property = "vServiceBbuId", column = "ServiceBbuId"),
    @Result(property = "vRadius", column = "Radius"),
    @Result(property = "vRruTransPower", column = "RruTransPower"),
    @Result(property = "vRruBandwidth", column = "RruBandwidth"),
    @Result(property = "vUeNum", column = "UeNum"),
    @Result(property = "vCarrierFrequent", column = "CarrierFrequent"),
    @Result(property = "vEquipPower", column = "EquipPower"),
    @Result(property = "vOpTime", column = "OpTime"),
    @Result(property = "vOpTime", column = "OpTime"),
  })
  List<Rru> getAll();

  @Select("SELECT * FROM Rru Where network_id = #{network_id}")
  List<Rru> getAllbyNetworkId(@Param("network_id") int network_id);

  @Select("SELECT * FROM Rru Where UeId = #{id}")
  Rru getOne(@Param("id") int id);
}
